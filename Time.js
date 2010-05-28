var Time = function ()
{
    this.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Fryday',
        'Saturday', 'Sunday'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    this._setopts = function (date, opts)
    {
        if (opts.year)
            date.setFullYear (opts.year);
        if (opts.month)
            date.setMonth (opts.month - 1);
        if (opts.day)
            date.setDate (opts.day);
        if (opts.hour)
            date.setHours (opts.hour);
        if (opts.min)
            date.setMinutes (opts.min);
        if (opts.usec)
            date.setMilliseconds (opts.usec);
        if (opts.sec)
            date.setSeconds (opts.sec);
        if (opts.unix)
            date.setTime (opts.unix * 1000);
        if (opts.uunix)
            date.setTime (opts.uunix);
        return date;
    };

    this._toobj = function (_new)
    {
        var tmp = new String (_new);
        tmp = tmp.substr (tmp.indexOf ("GMT") + 3);
        return ({
            __date:     _new,
            year:       _new.getYear () + 1900,
            month:      _new.getMonth () + 1,
            day:        _new.getDate (),
            hour:       _new.getHours (),
            min:        _new.getMinutes (),
            sec:        _new.getSeconds (),
            usec:       _new.getMilliseconds (),
            timezone:   tmp.replace (/^.*\(|\)$/g, ''),
            offset:     tmp.replace (/\s.*$/, ''),
            weekday:    _new.getDay (),
            unix:       Math.floor (_new.getTime () / 1000),
            uunix:      _new.getTime (),
            leap:       (!(_new.getYear () % 400) || (!(_new.getYear () % 4)
                        && (_new.getYear () % 100)) ? true : false)
        });
    };

    this.now = this._toobj (new Date);

    if (!arguments.length)
        this.time = this.now;
    else
        this.time = this._toobj (this._setopts (new Date, arguments[0]));

    this.setOptions = function (opts)
    {
        this.time = this._toobj (this._setopts (this.time.__date, opts));
        return this;
    };

    this.zerify = function (number)
    {
        return (number < 10 ? '0' + number : number.toString ());
    };

    this._getDays = function (those)
    {
        var monthsdaysno = [31, (those.time.leap ? 28 : 29), 31, 30, 31, 30, 31, 31, 30,
            31, 30, 31];
        var days = 0;
        for (i = 0; i < (those.time.month - 1); i++)
            days += monthsdaysno[i];
        return days + those.time.day - 1;
    };

    this.toString = function (){
        return "[object Time]";
    };

    this.subs = {
        'd': function (those){ return those.zerify (those.time.day); },
        'D': function (those){ return those.weekdays[those.time.weekday - 1].substr (0, 3); },
        'j': function (those){ return those.time.month.toString (); },
        'l': function (those){ return those.weekdays[those.time.weekday - 1]; },
        'N': function (those){ return those.time.weekday.toString (); },
        'S': function (those){ return (those.time.day == 1 ? 'st' : (those.time.day == 2 ? 'nd' :
                (those.time.day == 3 ? 'rd' : 'th'))); },
        'w': function (those){ return (those.time.weekday - 1).toString (); },
        'z': this._getDays,
        'W': function (those){ return Math.ceil (those._getDays (those) / 7); },
        'F': function (those){ return those.months[those.time.month]; },
        'm': function (those){ return those.zerify (those.time.month); },
        'M': function (those){ return those.months[those.time.month - 1].substr (0, 3); },
        'n': function (those){ return those.time.month; },
        't': function (those){ return those._monthsdaysno[those.time.month - 1]; },
        'L': function (those){ return (those.time.leap ? '1' : '0'); },
        'Y': function (those){ return those.time.year; },
        'y': function (those){ return those.time.year.toString ().substr (2,4); },
        'a': function (those){ return (those.time.hour < 12 ? 'am' : 'pm'); },
        'A': function (those){ return (those.time.hour < 12 ? 'AM' : 'PM'); },
        'B': function (those)
        {
            return Math.floor (((those.time.hour * 60 + those.time.min) * 60 + those.time.sec -
                (those.time.offset[0] == '-' ? -((((parseInt (those.time.offset.match
                    (/[\+-]([0-9]{2})/))) * 60) + parseInt (those.time.offset.match
                         (/[\+-][0-9]{2}([0-9]{2})/)[1])) * 60) : (((parseInt
                            (those.time.offset.match (/[\+-]([0-9]{2})/))) * 60) + parseInt
                                (those.time.offset.match (/[\+-][0-9]{2}([0-9]{2})/)[1])) * 60) +
                3600) / 86.4);
        },
        'g': function (those){ return (those.time.hour > 12 ? (those.time.hour - 12).toString () :
            those.time.hour.toString ()); },
        'G': function (those){ return (those.time.hour - 1).toString (); },
        'h': function (those){ return those.zerify (those.time.hour > 12 ? those.time.hour : those.time.hour
            - 12); },
        'H': function (those){ return those.zerify (those.time.hour - 1); },
        'i': function (those){ return those.zerify (those.time.min); },
        's': function (those){ return those.zerify (those.time.sec); },
        'u': function (those){ return those.time.usec.toString (); },
        //'I': DON'T WONT TO IMPLEMENT THIS,
        'O': function (those){ return those.time.offset; },
        'P': function (those){ return those.time.offset.replace (/([\+-][0-9]{2})([0-9]{2})/, "$1:$2"); },
        'T': function (those){ return those.time.timezone; },
        'Z': function (those)
        {
            return ((parseInt (those.time.offset.match (/[\+-]([0-9]{2})/)) * 60 + parseInt
                (those.time.offset.match (/[\+-][0-9]{2}([0-9]{2})/))) * 60).toString ();
        },
        'c': function (those)
        {
            return those.time.year + '-' + those.zerify (those.time.month) + '-' +
                those.zerify (those.time.day) + 'T' + those.zerify (those.time.hour) +
                ':' + those.zerify (those.time.min) + ':' + those.zerify
                    (those.time.sec) + those.time.offset.replace (/([\+-][0-9]{2})([0-9]{2})/, '$1:$2');
        },
        'r': function (those)
        {
            return those.weekdays[those.time.weekday - 1].substr (0, 3) + ", " + those.zerify
                (those.time.day) + ' ' + those.months[those.time.month - 1].substr (0,
                    3) + ' ' + those.time.year + ' ' + those.zerify
                        (those.time.hour) + ':' + those.zerify (those.time.min) + ':' +
                those.zerify (those.time.sec) + ' ' + those.time.offset;
        },
       'U': function (those){ return those.time.unix.toString (); }
    };

    this.format = function (format)
    {
        if (!format)
            return false;
        var res = "";
        var i = 0;
        while (i < format.length)
        {
            if (format[i] == '%')
                if (format[++i] == '%')
                    res += '%';
                else if (this.subs[format[i]])
                        res += this.subs[format[i]](this);
            else
                res += format[i];
            i++;
        }

        return res;
    };
};
