import createError   from '../../src/tst/error.js'

test("error test", ()=>{

    expect(createError('tt')).toBe(2);
    expect(()=>createError('fert666')).toThrow();


});