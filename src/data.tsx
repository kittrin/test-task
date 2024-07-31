import {IUSer} from "./types/types";

export const data: IUSer[] = [
    {
        id: 1,
        firstName: 'Иван',
        lastName: 'Иванов',
        position: 'Секретарь',
        startDate: new Date(2011, 0, 1),
        email: 'example@yandex.ru',
        subordinates: null,
    },
    {
        id: 2,
        firstName: 'Петр',
        lastName: 'Петров',
        position: 'Главный бухгалтер',
        startDate: new Date(2015, 10, 1),
        email: 'example@yandex.ru',
        subordinates: [
            {
                id: 3,
                firstName: 'Илья',
                lastName: 'Ильин',
                position: 'Бухгалтер',
                startDate: new Date(2023, 5, 1),
                email: null,
                subordinates: null,
            },
            {
                id: 4,
                firstName: 'Кирилл',
                lastName: 'Кириллов',
                position: 'Экономист',
                startDate: new Date(2019, 10, 1),
                email: 'example@yandex.ru',
                subordinates: null,
            },
            {
                id: 5,
                firstName: 'Михаил',
                lastName: 'Мишин',
                position: 'Бухгалтер',
                startDate: new Date(2016, 1, 1),
                email: 'example@yandex.ru',
                subordinates: [
                    {
                        id: 6,
                        firstName: 'Иван',
                        lastName: 'Иванов',
                        position: 'Секретарь',
                        startDate: new Date(2020, 0, 1),
                        email: 'example@yandex.ru',
                        subordinates: null,
                    }
                ],
            }
        ]
    },
    {
        id: 7,
        firstName: 'Игорь',
        lastName: 'Игорев',
        position: 'Директор',
        startDate: new Date(2011, 0, 1),
        email: 'example@yandex.ru',
        subordinates: [
            {
                id: 8,
                firstName: 'Дмитрий',
                lastName: 'Дмитриев',
                position: 'Юрист',
                startDate: new Date(2015, 0, 1),
                email: null,
                subordinates: null,
            }
        ],
    },
    {
        id: 9,
        firstName: 'Николай',
        lastName: 'Николаев',
        position: 'Специалист технической поддержки',
        startDate: new Date(2011, 0, 1),
        email: 'example@yandex.ru',
        subordinates: null,
    },
    {
        id: 10,
        firstName: 'Андрей',
        lastName: 'Андреев',
        position: 'Главный менеджер',
        startDate: new Date(2011, 0, 1),
        email: 'example@yandex.ru',
        subordinates: [
            {
                id: 11,
                firstName: 'Глеб',
                lastName: 'Глебов',
                position: 'Менеджер',
                startDate: new Date(2011, 0, 1),
                email: null,
                subordinates: null,
            }
        ],
    }
]