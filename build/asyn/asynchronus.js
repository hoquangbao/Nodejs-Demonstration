"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const step11 = () => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log("complete step 1");
                resolve(nextStep);
            }
            catch (error) {
                rejects();
            }
        }, 1000);
    });
};
const step22 = (step) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`complete step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                rejects();
            }
        }, 1000);
    });
};
const step33 = (step) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`complete step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                rejects();
            }
        }, 1000);
    });
};
const build = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const steps1 = yield step11();
        const steps2 = yield step22(steps1);
        yield step33(steps2);
        console.log('Your house is done');
    }
    catch (error) {
        console.log(error);
    }
});
build();
