test("mock functions", () => {
    const mock = jest.fn();
    const result = mock("foo");
    
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
    expect(result).toBeUndefined();
});