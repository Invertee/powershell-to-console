## Powershell-to-Console Module

A JS module that runs spawns a powershell instance and runs a PS cmdlet or script. 

### Installation
```
npm install --save powershell-to-console
```

### Params 
ps.script( ) requires an object with the following fields:

* **script** `string` :  The command or script location to execute
* **noProfile** `bool` : Turns on/off the noprofile switch (defaults to false)
* **PSCore** `bool` : Runs the 'pwsh' command instead of 'powershell' to use Powershell core. (defaults to false)
* **executionPolicy** `string` : Runs powershell with specific execution policy. Valid entries are `Restricted`, `Allsigned`, `RemoteSigned`, `Unrestricted`, `Bypass`, `Undefined`
* **exitMessage** `bool` : Prints a message on script completion. 
### Example

```
const ps = require('powershell-to-console')

var params = {
  script : './script.ps1',
  executionPolicy: 'bypass',
  noProfile: true,
  PSCore : false,
  exitMessage : true
};

ps.script( params )
```