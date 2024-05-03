const path = "../src/answers/";

describe("answers", function () {
    const q1 = require(path + "q1.js");

    let originalLog;

    beforeEach(() => {
        console.log = jasmine.createSpy("log");
    });

    it("q1.js has a swap function that prints swapped variables, and returns -1 if variables are non-numeric", function () {
        expect(q1.swap("Apple", 10)).toBe(-1);
        expect(console.log).not.toHaveBeenCalled();

        expect(q1.swap(9, 17));
        expect(console.log).toHaveBeenCalledWith(17, 9);
    });

    it('q2.js has a function "addPatient" to add strings to an array and a function "listPatient" to print all elements in that array', function () {
        const q2 = require(path + "q2.js");

        expect(console.log).toHaveBeenCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith("John");
        expect(console.log).toHaveBeenCalledWith("Mary");
        expect(console.log).toHaveBeenCalledWith("Mark");
    });

    it("q3.js prints dog.breed with the 'dog' value", function () {
        const q3 = require(path + "q3.js");

        expect(console.log).toHaveBeenCalledTimes(1);

        let dog = { breed: "dog" };
        expect(console.log).toHaveBeenCalledWith("dog", dog);
    });

    it("q4.js has Parent and Child classes with show and add abilities functions", function () {
        const q4 = require(path + "q4.js");

        expect(console.log).toHaveBeenCalledTimes(7);
        expect(console.log).toHaveBeenCalledWith("These are the abilities:");
        expect(console.log).toHaveBeenCalledWith("Parenting");
        expect(console.log).toHaveBeenCalledWith("Role modeling");
        expect(console.log).toHaveBeenCalledWith("These are the abilities:");
        expect(console.log).toHaveBeenCalledWith("Parenting");
        expect(console.log).toHaveBeenCalledWith("Role modeling");
        expect(console.log).toHaveBeenCalledWith("Dancing");
    });

    it("q7.js has a function called introduce that prints some shit", function () {
        const q7 = require(path + "q7.js");

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(
            "Hello, my name is Jane and I love swimming!"
        );
    });

    afterEach(() => {
        console.log = originalLog;
    });
});
