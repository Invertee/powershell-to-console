var PS = {
    script: function( params ) {
        var args = []
        if (!params) {throw new Error('Params object not specified')}
        var exe = (params.PSCore) ? 'pwsh' : 'powershell';

        if (params.noProfile) {
            args.push('-NoProfile');
        }

        if (params.executionPolicy) {
            args.push('-executionpolicy');
            args.push( params.executionPolicy )
        }

        if ( params.script && params.command ) {
            throw new Error("Script and command params cannot be used together.")
        }
        
        if (params.script) {
            args.push( params.script ); 
        } else {
            throw new Error('Script not specified.')
        }
        
        var spawn = require("child_process").spawn,child;
        var child = spawn( exe , args );

        child.stdout.on("data", function(data) {
            console.log(data.toString().trim());
        });
        child.stderr.on("data", function(data) {
            console.log(data.toString().trim());
        });

        child.on("exit",function(){
            if (params.exitMessage) 
            {
                console.log("Powershell script finished.");
            }    
        });
        child.stdin.end();
    },
};

module.exports = PS;