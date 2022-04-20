import { resolve } from 'dns';

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    mock(100).then((data) => result.push(data));
    mock(200).then((data) => result.push(data));
    return mock(300).then((data) => {
        result.push(data);
        return result;
    });
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        let a = new Promise((resolve, reject) => {
            reject();
        });
        throw a.catch(function () {
            return 'my error';
        });
    } catch (err: any) {
        return err;
    }
}
