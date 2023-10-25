const step11 = (): Promise<number> => {
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

const step22 = (step: unknown): Promise<number> => {
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

const step33 = (step: unknown): Promise<number> => {
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

const build = async ():Promise<void> =>{
    try {
        const steps1 = await step11();
        const steps2 = await step22(steps1);
        await step33(steps2);
        console.log('Your house is done')
    } catch (error) {
        console.log(error)
    }
}

build();