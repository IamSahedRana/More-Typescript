interface Response<T> {
    status: number;
    message: string;
    data: T;
}

const response1: Response<string> = {
    status: 200,
    message: "Success",
    data: "This is a string response"
};

const response2: Response<boolean> = {
    status: 200,
    message: "Success",
    data: true
};

const response3: Response<{ id: number; name: string }> = {
    status: 200,
    message: "Success",
    data: { id: 1, name: "John Doe" }
};

function getLength<T>(array: T[]): number {
     return array.length;
}

getLength<string>(['','', '3'])
getLength<number> ([4,6])


function userState(initialValue) {
     let value = initialValue;     
     function setValue(newValue) {
          value = newValue;
     }
     return { value, setValue };
}