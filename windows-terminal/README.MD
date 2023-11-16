

Download https://learn.microsoft.com/en-us/troubleshoot/developer/visualstudio/cpp/libraries/c-runtime-packages-desktop-bridge
Pick right platform

    Microsoft.VCLibs.arm.14.00.Desktop.appx
    Microsoft.VCLibs.arm64.14.00.Desktop.appx
    Microsoft.VCLibs.x64.14.00.Desktop.appx
    Microsoft.VCLibs.x86.14.00.Desktop.appx

Install
Add-AppxPackage -Path .\Microsoft.VCLibs.x64.14.00.Desktop.appx


Download https://github.com/microsoft/terminal/releases
File name: Microsoft.WindowsTerminal Win10 <Version> 8wekyb3d8bbwe.msixbundle.
Install: Add-AppxPackage -Path .\Microsoft.WindowsTerminal_Win10_<Version>_8wekyb3d8bbwe.msixbundle


Download: https://github.com/microsoft/microsoft-ui-xaml/releases
pick right platform
	Microsoft.UI.Xaml.2.8.arm.appx
	Microsoft.UI.Xaml.2.8.arm64.appx
	Microsoft.UI.Xaml.2.8.x64.appx
	Microsoft.UI.Xaml.2.8.x86.appx 
Install: Add-AppxPackage -Path .\Microsoft.UI.Xaml.2.8.x64.appx




Copy terminal.ico to
%USERPROFILE%/AppData/Local/WTerminal/terminal.ico

Edit USER_NAME in Open Terminal Here.reg