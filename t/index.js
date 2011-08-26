var Harness

if (typeof process != 'undefined' && process.pid) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else
    Harness = Test.Run.Harness.Browser.ExtJS

    
Harness.configure({
    title : 'Data.UUID Test Suite',

    preload : [
        '../node_modules/joose/joose-all.js',
        '../lib/Data/UUID.js'
    ]
})


Harness.start(
    '010_sanity.t.js',
    '020_initializer.t.js'
)
