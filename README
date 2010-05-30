JSTIME
======

WTF is this?
------------
Time is a simple JavaScript object which simplify your life playing with dates.

ATTRIBUTES
----------
Time#now
    Attribute which contain informations about current date (DATE type)
Time#time
    Attribute which contain informations about selected date (DATE type)

METHODS
-------
Time ([OPTIONS])
    Constructor of class accept optionally OPTIONS for parameters
Time#setOptions (OPTIONS)
    Set the various OPTIONS
Time#format (FORMAT)
    Get a string with the date in the requested format

TYPES
-----
DATE#:
    - year      (Integer)
    - month     (Integer)
    - day       (Integer)
    - hour      (Integer)
    - min       (Integer)
    - sec       (Integer)
    - usec      (Integer)
    - timezone  (String)
    - offset    (String)
    - weekday   (Integer)
    - unix      (Integer)
    - uunix     (Integer)
    - leap      (Boolean)

OPTIONS#:
    - year      (Integer)
    - month     (Integer)
    - day       (Integer)
    - hour      (Integer)
    - min       (Integer)
    - sec       (Integer)
    - usec      (Integer)
    - unix      (Integer)
    - uunix     (Integer)

FORMAT: String
    FORMAT type is a string who contain the format to print date, every switch
    value is preceded by a '%', the escape character for '%' is another '%'
    ('%%d' will print '%%d', '%d' will print the day).
    SWITCHES:
        -d Day of the month, 2 digits with leading zeros (01 to 31)
        -D A textual representation of a day, three letters (Mon through Sun)
        -j Day of the month without leading zeros (1 to 31)
        -l A full textual representation of the day of the week (Sunday through
                Saturday)
        -N ISO-8601 numeric representation of the day of the week (1 (for
                    Monday) through 7 (for Sunday))
        -S English ordinal suffix for the day of the month, 2 characters (st,
                nd, rd or th. Works well with j)
        -w Numeric representation of the day of the week (0 (for Sunday) through
                6 (for Saturday))
        -z The day of the year (starting from 0) (0 through 365)
        -W ISO-8601 week number of year, weeks starting on Monday (42 (the 42nd
                    week in the year))
        -F A full textual representation of a month, such as January or March
                    (January through December)
        -m Numeric representation of a month, with leading zeros (01 through 12)
        -M A short textual representation of a month, three letters (Jan through
                Dec)
        -n Numeric representation of a month, without leading zeros (1 through
                12)
        -t Number of days in the given month (28 through 31)
        -L Whether it's a leap year (1 if it is a leap year, 0 otherwise.)
        -Y ISO-8601 year number. This has the same value as Y, except that if
                the ISO week number (W) belongs to the previous or next year,
                that year is used instead. (1999 or 2003)
        -y A two digit representation of a year (99 or 03)
        -a Lowercase Ante meridiem and Post meridiem (am or pm)
        -A Uppercase Ante meridiem and Post meridiem (AM or PM)
        -B Swatch Internet time (000 through 999)
        -g 12-hour format of an hour without leading zeros (1 through 12)
        -G 24-hour format of an hour without leading zeros (0 through 23)
        -h 12-hour format of an hour with leading zeros (01 through 12)
        -H 24-hour format of an hour with leading zeros (00 through 23)
        -i Minutes with leading zeros (00 to 59)
        -s Seconds, with leading zeros (00 to 59)
        -u Microseconds (Example: 654321)
        -I Whether or not the date is in daylight saving time (1 if Daylight
                Saving Time, 0 otherwise.)
        -O Difference to Greenwich time (GMT) in hours (Example: +0200)
        -P Difference to Greenwich time (GMT) with colon between hours and
                minutes (Example: +02:00)
        -T Timezone abbreviation (Examples: EST, MDT ...)
        -Z Timezone offset in seconds. The offset for timezones west of UTC is
                always negative, and for those east of UTC is always positive.
                (-43200 through 50400)
        -c ISO 8601 date (2004-02-12T15:19:21+00:00)
        -r RFC 2822 formatted date (Example: Thu, 21 Dec 2000 16:01:07 +0200)
        -U Example: Thu, 21 Dec 2000 16:01:07 +0200 (Example: 1275086613)
