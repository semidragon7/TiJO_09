describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should calculate area for given numbers', function () {
            expect(answer.calculateArea(2,55,3,'Done', 'KABOOM')).toEqual({area: 49, message: 'Done'});
            expect(answer.calculateArea(21,2,3,'Yea', 'opps')).toEqual({area: 15, message: 'Yea'});
            expect(answer.calculateArea(21,2,0,'Yea', 'opps')).toEqual({area: 21, message: 'Yea'});
            expect(answer.calculateArea(21,21,-2,'Yea', 'opps')).toEqual({area: 63, message: 'Yea'});
            expect(answer.calculateArea(21,21,0,'Yea', 'opps')).toEqual({area: 21, message: 'Yea'});
            expect(answer.calculateArea(1,1,0,'aa', 'opps')).toEqual({area: 1, message: 'aa'});
        });
        it('should return false if some of arguments are incorrect', function () {
            expect(answer.calculateArea(2)).toEqual(false);
            expect(answer.calculateArea(1,2,3,4,3)).toEqual(false);
            expect(answer.calculateArea(1,2,3,4,'')).toEqual(false);
            expect(answer.calculateArea('a','s','z',2,2)).toEqual(false);
            expect(answer.calculateArea('','','','','')).toEqual(false);
            expect(answer.calculateArea(1,4,'','','')).toEqual(false);
            expect(answer.calculateArea(1,'',2,'','')).toEqual(false);
        });
        it('should return area with message error', function () {
            expect(answer.calculateArea(2,3,4,'good','SO BAAD')).toEqual({ area : -5, message : 'SO BAAD' });
            expect(answer.calculateArea(2,2,2,'good','SO BAAD')).toEqual({ area : -2, message : 'SO BAAD' });
        });
        it('should return area 0 and message', function () {
            expect(answer.calculateArea(0,0,0,'good','SO BAAD')).toEqual({ area : 0, message : 'Big null' });
        });
    });
});