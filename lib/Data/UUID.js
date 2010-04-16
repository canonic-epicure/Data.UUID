Class('Data.UUID', {
    
    my : {
        
        methods : {
            
            uuid : function() {
                var chars = CHARS, uuid = new Array(36), rnd=0, r;
                
                for (var i = 0; i < 36; i++) {
                    if (i==8 || i==13 ||  i==18 || i==23) {
                        uuid[i] = '-';
                    } else {
                        if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                        r = rnd & 0xf;
                        rnd = rnd >> 4;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
                
                return uuid.join('')
            }
        }
    }
})


/**

Name
====


Data.UUID - provides RFC4122v4 complaint UUIDs


SYNOPSIS
========

        var uuid = Data.UUID.my.uuid()


DESCRIPTION
===========

`Data.UUID` is a very simple class, containing a single static method - `uuid`, which return the string represenation of UUID,
conforming to RFC4122v4.



GETTING HELP
============

This extension is supported via github issues tracker: <http://github.com/SamuraiJack/Data-UUID/issues>

For general Joose questions you can also visit #joose on irc.freenode.org or the forum at: [http://joose.it/forum](http://joose.it/forum)
 


SEE ALSO
========

Web page of this module: <http://github.com/SamuraiJack/Data-UUID/>

General documentation for Joose: <http://openjsan.org/go/?l=Joose>


BUGS
====

All complex software has bugs lurking in it, and this module is no exception.

Please report any bugs through the web interface at [http://github.com/SamuraiJack/Data-UUID/issues](http://github.com/SamuraiJack/Data-UUID/issues)



AUTHORS
=======

Author: Robert Kieffer <robert@broofa.com>

Maintainer: Nickolay Platonov <nplatonov@cpan.org>



COPYRIGHT AND LICENSE
=====================

Copyright (c) 2010 Robert Kieffer

Dual licensed under the MIT and GPL licenses.

*/
