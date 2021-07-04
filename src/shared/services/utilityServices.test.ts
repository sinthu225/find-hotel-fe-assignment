import UtilityService from "./utlityService";


// parseURLParamsToGuestObj

test("ensure parseURLParamsToGuestObj returns valid guest Obj", async () => {
  const urlParam = "1:4,6|3";
  const result = await UtilityService.parseURLParamsToGuestObj(urlParam);
  expect(result).toEqual([
    { adult: 1, childrenAges: [4, 6] },
    { adult: 3, childrenAges: [] },
  ]);
});

test("ensure parseURLParamsToGuestObj returns valid guest Obj when only adult number given", async () => {
  const urlParam = "3";
  const result = await UtilityService.parseURLParamsToGuestObj(urlParam);
  expect(result).toEqual([{ adult: 3, childrenAges: [] }]);
});

test("ensure parseURLParamsToGuestObj returns valid guest Obj when adult number and one age", async () => {
  const urlParam = "2:4";
  const result = await UtilityService.parseURLParamsToGuestObj(urlParam);
  expect(result).toEqual([{ adult: 2, childrenAges: [4] }]);
});

test("ensure parseURLParamsToGuestObj returns default guest Obj incorrect value is supplied for age", async () => {
  const urlParam = "1:0,13,aaa";
  const result = await UtilityService.parseURLParamsToGuestObj(urlParam);
  expect(result).toEqual([{ adult: 1, childrenAges: [0,13] }]);
});

test("ensure parseURLParamsToGuestObj returns default guest Obj incorrect value is supplied", async () => {
  const urlParam = "qqq:0,13,2";
  const result = await UtilityService.parseURLParamsToGuestObj(urlParam);
  expect(result).toEqual([{ adult: 2, childrenAges: [] }]);
});

test("ensure parseURLParamsToGuestObj returns default guest Obj incorrect value is supplied", async () => {
  const urlParam = "2:0,13,2|uuuu";
  const result = await UtilityService.parseURLParamsToGuestObj(urlParam);
  expect(result).toEqual([{ adult: 2, childrenAges: [0,13,2] }]);
});


// parseGuestObjToURLParam

test("ensure parseGuestObjToURLParam returns valid guest Obj", async () => {
    const guestObj = [
        { adult: 1, childrenAges: [4, 6] },
        { adult: 3, childrenAges: [] },
      ];
    const result = await UtilityService.parseGuestObjToURLParam(guestObj);
    expect(result).toEqual("1:4,6|3");
  });
  
  test("ensure parseGuestObjToURLParam returns valid guest Obj when only adult number given", async () => {
    const guestObj = [{ adult: 3, childrenAges: [] }];
    const result = await UtilityService.parseGuestObjToURLParam(guestObj);
    expect(result).toEqual("3");
  });
  
  test("ensure parseGuestObjToURLParam returns valid guest Obj when adult number and one age", async () => {
    const guestObj = [{ adult: 2, childrenAges: [4] }];
    const result = await UtilityService.parseGuestObjToURLParam(guestObj);
    expect(result).toEqual("2:4");
  });
  
  test("ensure parseGuestObjToURLParam returns default guest Obj incorrect value is supplied for age", async () => {
    const guestObj = [{ adult: 1, childrenAges: [0,13,12] }];
    const result = await UtilityService.parseGuestObjToURLParam(guestObj);
    expect(result).toEqual("1:0,13,12");
  });

  // getGuestCount

test("ensure getGuestCount returns valid guest Obj", async () => {
    const guestObj = [
        { adult: 1, childrenAges: [4, 6] },
        { adult: 3, childrenAges: [] },
      ];
    const result = await UtilityService.getGuestCount(guestObj);
    expect(result).toEqual(6);
  });
  
  test("ensure getGuestCount returns valid guest Obj when only adult number given", async () => {
    const guestObj = [{ adult: 3, childrenAges: [] }];
    const result = await UtilityService.getGuestCount(guestObj);
    expect(result).toEqual(3);
  });
  
  test("ensure getGuestCount returns valid guest Obj when adult number and one age", async () => {
    const guestObj = [{ adult: 2, childrenAges: [4] }];
    const result = await UtilityService.getGuestCount(guestObj);
    expect(result).toEqual(3);
  });
  
  test("ensure getGuestCount returns default guest Obj incorrect value is supplied for age", async () => {
    const guestObj = [{ adult: 1, childrenAges: [0,13,12] }];
    const result = await UtilityService.getGuestCount(guestObj);
    expect(result).toEqual(4);
  });
  

