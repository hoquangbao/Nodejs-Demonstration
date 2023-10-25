const step1 = () : Promise<number> => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log("complete step 1");
                resolve(nextStep)
            } catch (error) {
                rejects();
            }
        }, 1000)
    })
};

const step2 = (step : unknown): Promise<number> => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = step as number + 1;
                console.log(`complete step ${nextStep}`);
                resolve(nextStep)
            } catch (error) {
                rejects();
            }
        }, 1000)
    })
};

const step3 = (step: unknown): Promise<number> => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = step as number + 1;
                console.log(`complete step ${nextStep}`);
                resolve(nextStep)
            } catch (error) {
                rejects();
            }
        }, 1000)
    })
};

step1()
.then((result) =>{
    return step2(result)
}).then((result) =>{
    return step2(result)
})
.then(() =>{
    console.log('Your house is done')
}).catch((error) => {
    console.log(error)
})