
let localItems = {
    Engine: 1,
    Name: 'ТВ7-117',
    Status: [
        {
            worker: {
                User: null,
                Role: null
            },
            status: "inwork",
            timestart: -8585237748141766396,
            timeend: -8585237742192272561
        },
        {
            worker: {
                User: null,
                Role: null
            },
            status: "stop",
            timestart: -8585237742192272561,
            timeend: -8585237742000594637
        },
        {
            worker: {
                User: null,
                Role: null
            },
            status: "inwork",
            timestart: -8585237742000594637,
            timeend: 0
        }
    ],
    Workers: [
        {
            User: "Работник 1",
            Role: Worker
        },
        {
            User: "Работник 2",
            Role: Worker
        },
        {
            User: "Проверяющий 1",
            Role: "specialist"
        }
    ],
    Messeges: [
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Работник 1",
            Link: "openstep: 0:0:0:0:0",
            Time: -8585237747914705675,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "error",
            Message: "",
            Worker: "Работник 1",
            Link: "openstep: 0:0:1:0:1",
            Time: -8585237747700993557,
            Misc: {
                ID: 4,
                Title: "Ожидание документации или решения от цеха смежника",
                Description: "Остановка из-за невозможности продолжения сборочного/испытательного процессов из-за отсутствия решения или документации от смежных подразделений "
            }
        },
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Работник 1",
            Link: "openstep: 0:1:0:0:0",
            Time: -8585237747492538451,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Работник 1",
            Link: "openstep: 0:1:0:0:1",
            Time: -8585237747322188256,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "return",
            Message: "шаг возвращен в работу",
            Worker: "Работник 2",
            Link: "openstep: 0:0:1:0:1",
            Time: -8585237744967884337,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Работник 2",
            Link: "openstep: 0:0:1:0:1",
            Time: -8585237744877694755,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "return",
            Message: "шаг возвращен в работу",
            Worker: "Работник 2",
            Link: "openstep: 0:0:0:0:0",
            Time: -8585237744765724927,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Работник 2",
            Link: "openstep: 0:1:1:0:1",
            Time: -8585237742293696338,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "error",
            Message: "",
            Worker: "Работник 2",
            Link: "openstep: 0:0:1:0:0",
            Time: -8585237742210256832,
            Misc: {
                ID: 3,
                Title: "Ожидание ДСЕ (дефицит) ",
                Description: "Невозможность продолжения сборочного/испытательного процессов по дефициту двигателей собственного производства "
            }
        },
        {
            Type: "return",
            Message: "шаг возвращен в работу",
            Worker: "Проверяющий 1",
            Link: "openstep: 0:0:1:0:0",
            Time: -8585237742000594637,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "check",
            Message: "шаг проверен",
            Worker: "Проверяющий 1",
            Link: "openstep: 0:0:1:0:1",
            Time: -8585237741945362139,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Проверяющий 1",
            Link: "openstep: 0:1:1:0:0",
            Time: -8585237741842078932,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "check",
            Message: "шаг проверен",
            Worker: "Проверяющий 1",
            Link: "openstep: 0:1:1:0:0",
            Time: -8585237741821452983,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "return",
            Message: "шаг возвращен в работу",
            Worker: "Проверяющий 1",
            Link: "openstep: 0:1:0:0:1",
            Time: -8585237741740460226,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        },
        {
            Type: "done",
            Message: "Шаг пройден",
            Worker: "Проверяющий 1",
            Link: "openstep: 0:0:0:0:0",
            Time: -8585237741683958624,
            Misc: {
                ID: 0,
                Title: null,
                Description: null
            }
        }
    ],
    StopsCount: 0,
    FailureCount: 0,
    Chapters: [
        {
            Name: "Сборка на ПИ",
            Status: [
                {
                    Worker: {
                        User: "Работник 1",
                        Role: 'Worker'
                    },
                    Status: "inwork",
                    timestart: -8585237748141766396,
                    timeend: -8585237742192272561
                },
                {
                    Worker: {
                        User: "Работник 2",
                        Role: 'Worker'
                    },
                    Status: "stop",
                    timestart: -8585237742192272561,
                    timeend: -8585237742000594637
                },
                {
                    Worker: {
                        User: "Работник 2",
                        Role: 'Worker'
                    },
                    Status: "inwork",
                    timestart: -8585237742000594637,
                    timeend: 0
                }
            ],
            "Stages": [
                {
                    Name: "Этап 1. Сборка осевого компрессора",
                    Failure: 0,
                    Stops: 0,
                    Status: [
                        {
                            Worker: {
                                User: "Работник 1",
                                Role: 'Worker'
                            },
                            Status: "inwork",
                            timestart: -8585237748141766396,
                            timeend: 0
                        }
                    ],
                    Operations: [
                        {
                            Name: "5 - Подготовка к сборке",
                            Tag: "Операция 5",
                            Failure: 0,
                            Stops: 0,
                            Status: [
                                {
                                    Worker: {
                                        User: "Работник 1",
                                        Role: 'Worker'
                                    },
                                    Status: "inwork",
                                    timestart: -8585237748141766396,
                                    timeend: 0
                                }
                            ],
                            Steps: [
                                {
                                    Name: "Operation 5_1",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237748141766396,
                                            timeend: -8585237747914745678
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "done",
                                            timestart: -8585237747914745678,
                                            timeend: -8585237744765724927
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237744765724927,
                                            timeend: -8585237741683998635
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "done",
                                            timestart: -8585237741683998635,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: [
                                        {
                                            "StartTime": -8585237748141766396,
                                            "Text": {
                                                "Links": [],
                                                "Messages": [
                                                    "2222222222222222222222222222",
                                                    ""
                                                ]
                                            },
                                            "Audio": {
                                                "Links": [
                                                    "C:/Users/Ogreb/AppData/LocalLow/petrosoft/Klimov menu systems\\audio_03_03_2023_11_28_3594.wav"
                                                ],
                                                "Messages": [
                                                    "11111111111111111111111111111111",
                                                    ""
                                                ]
                                            },
                                            "Video": {
                                                "Links": [],
                                                "Messages": []
                                            },
                                            "Photo": {
                                                "Links": [],
                                                "Messages": [
                                                    ""
                                                ]
                                            }
                                        },
                                        {
                                            "StartTime": -8585237744765724927,
                                            "Text": {
                                                "Links": [],
                                                "Messages": [
                                                    "2222222222222222222222222222",
                                                    ""
                                                ]
                                            },
                                            "Audio": {
                                                "Links": [],
                                                "Messages": [
                                                    ""
                                                ]
                                            },
                                            "Video": {
                                                "Links": [],
                                                "Messages": []
                                            },
                                            "Photo": {
                                                "Links": [],
                                                "Messages": []
                                            }
                                        }
                                    ]
                                },
                                {
                                    Name: "Operation 5_2",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237747885257179,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: [
                                        {
                                            "StartTime": -8585237747885257179,
                                            "Text": {
                                                "Links": [],
                                                "Messages": [
                                                    "1111111111111111111111111111111111111",
                                                    ""
                                                ]
                                            },
                                            "Audio": {
                                                "Links": [],
                                                "Messages": []
                                            },
                                            "Video": {
                                                "Links": [],
                                                "Messages": []
                                            },
                                            "Photo": {
                                                "Links": [],
                                                "Messages": []
                                            }
                                        }
                                    ]
                                }
                            ],
                            LastStatus: "inwork"
                        }
                    ],
                    LastStatus: "inwork"
                },
                {
                    Name: "Этап 2. Сборка ТКВД",
                    Failure: 1,
                    Stops: 1,
                    Status: [
                        {
                            Worker: {
                                User: "Работник 1",
                                Role: 'Worker'
                            },
                            Status: "inwork",
                            timestart: -8585237747737822620,
                            timeend: 0
                        }
                    ],
                    Operations: [
                        {
                            Name: "5 - Подготовка к сборке",
                            Tag: "Операция 5",
                            Failure: 1,
                            Stops: 1,
                            Status: [
                                {
                                    Worker: {
                                        User: "Работник 1",
                                        Role: 'Worker'
                                    },
                                    Status: "inwork",
                                    timestart: -8585237747737822620,
                                    timeend: 0
                                }
                            ],
                            Steps: [
                                {
                                    Name: "Operation 5_3",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 1,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237742238531220,
                                            timeend: -8585237742192272561
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "stop",
                                            timestart: -8585237742192272561,
                                            timeend: -8585237742000594637
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: Failure,
                                            timestart: -8585237742000594637,
                                            timeend: -8585237742000544624
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237742000544624,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: []
                                },
                                {
                                    Name: "Operation 5_4",
                                    Tag: "Операция 5",
                                    Failure: 1,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237747737822620,
                                            timeend: -8585237747683972238
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: Failure,
                                            timestart: -8585237747683972238,
                                            timeend: -8585237744967884337
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237744967884337,
                                            timeend: -8585237744877734757
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "done",
                                            timestart: -8585237744877734757,
                                            timeend: -8585237741945362139
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "check",
                                            timestart: -8585237741945362139,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: [
                                        {
                                            "StartTime": -8585237744967884337,
                                            "Text": {
                                                "Links": [],
                                                "Messages": [
                                                    "2222222222222222222",
                                                    ""
                                                ]
                                            },
                                            "Audio": {
                                                "Links": [],
                                                "Messages": []
                                            },
                                            "Video": {
                                                "Links": [],
                                                "Messages": []
                                            },
                                            "Photo": {
                                                "Links": [],
                                                "Messages": []
                                            }
                                        }
                                    ]
                                }
                            ],
                            LastStatus: "inwork"
                        }
                    ],
                    LastStatus: "inwork"
                }
            ],
            LastStatus: "inwork"
        },
        {
            Name: "Сборка на ПСИ",
            Status: [
                {
                    Worker: {
                        User: "Работник 1",
                        Role: Worker
                    },
                    Status: "inwork",
                    timestart: -8585237747503830973,
                    timeend: -8585237741821452983
                },
                {
                    Worker: {
                        User: "Проверяющий 1",
                        Role: "specialist"
                    },
                    Status: "check",
                    timestart: -8585237741821452983,
                    timeend: -8585237741740460226
                },
                {
                    Worker: {
                        User: "Проверяющий 1",
                        Role: "specialist"
                    },
                    Status: "inwork",
                    timestart: -8585237741740460226,
                    timeend: 0
                }
            ],
            "Stages": [
                {
                    Name: "Этап 1.  Сборка осевого компрессора",
                    Failure: 0,
                    Stops: 0,
                    Status: [
                        {
                            Worker: {
                                User: "Работник 1",
                                Role: Worker
                            },
                            Status: "inwork",
                            timestart: -8585237747503830973,
                            timeend: -8585237741891291095
                        },
                        {
                            Worker: {
                                User: "Проверяющий 1",
                                Role: "specialist"
                            },
                            Status: "check",
                            timestart: -8585237741891291095,
                            timeend: -8585237741740460226
                        },
                        {
                            Worker: {
                                User: "Проверяющий 1",
                                Role: "specialist"
                            },
                            Status: "inwork",
                            timestart: -8585237741740460226,
                            timeend: 0
                        }
                    ],
                    Operations: [
                        {
                            Name: "5 - Подготовка к сборке",
                            Tag: "Операция 5",
                            Failure: 0,
                            Stops: 0,
                            Status: [
                                {
                                    Worker: {
                                        User: "Работник 1",
                                        Role: Worker
                                    },
                                    Status: "inwork",
                                    timestart: -8585237747503830973,
                                    timeend: -8585237747322238257
                                },
                                {
                                    Worker: {
                                        User: "Работник 1",
                                        Role: Worker
                                    },
                                    Status: "done",
                                    timestart: -8585237747322238257,
                                    timeend: -8585237741891291095
                                },
                                {
                                    Worker: {
                                        User: "Проверяющий 1",
                                        Role: "specialist"
                                    },
                                    Status: "check",
                                    timestart: -8585237741891291095,
                                    timeend: -8585237741740460226
                                },
                                {
                                    Worker: {
                                        User: "Проверяющий 1",
                                        Role: "specialist"
                                    },
                                    Status: "inwork",
                                    timestart: -8585237741740460226,
                                    timeend: 0
                                }
                            ],
                            Steps: [
                                {
                                    Name: "Operation 5_2",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237747503830973,
                                            timeend: -8585237747492578460
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "done",
                                            timestart: -8585237747492578460,
                                            timeend: -8585237741891311098
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "check",
                                            timestart: -8585237741891311098,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: []
                                },
                                {
                                    Name: "Operation 5_3",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237747332160494,
                                            timeend: -8585237747322238257
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "done",
                                            timestart: -8585237747322238257,
                                            timeend: -8585237741891291095
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "check",
                                            timestart: -8585237741891291095,
                                            timeend: -8585237741740460226
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "inwork",
                                            timestart: -8585237741740460226,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: []
                                }
                            ],
                            LastStatus: "inwork"
                        }
                    ],
                    LastStatus: "inwork"
                },
                {
                    Name: "Этап 2. Сборка ТКВД",
                    Failure: 0,
                    Stops: 0,
                    Status: [
                        {
                            Worker: {
                                User: "Работник 1",
                                Role: Worker
                            },
                            Status: "inwork",
                            timestart: -8585237745187374695,
                            timeend: -8585237741821452983
                        },
                        {
                            Worker: {
                                User: "Проверяющий 1",
                                Role: "specialist"
                            },
                            Status: "check",
                            timestart: -8585237741821452983,
                            timeend: 0
                        }
                    ],
                    Operations: [
                        {
                            Name: "5 - Подготовка к сборке",
                            Tag: "Операция 5",
                            Failure: 0,
                            Stops: 0,
                            Status: [
                                {
                                    Worker: {
                                        User: "Работник 1",
                                        Role: Worker
                                    },
                                    Status: "inwork",
                                    timestart: -8585237745187374695,
                                    timeend: -8585237741842118940
                                },
                                {
                                    Worker: {
                                        User: "Проверяющий 1",
                                        Role: "specialist"
                                    },
                                    Status: "done",
                                    timestart: -8585237741842118940,
                                    timeend: -8585237741821452983
                                },
                                {
                                    Worker: {
                                        User: "Проверяющий 1",
                                        Role: "specialist"
                                    },
                                    Status: "check",
                                    timestart: -8585237741821452983,
                                    timeend: 0
                                }
                            ],
                            Steps: [
                                {
                                    Name: "Operation 5_1",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 1",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237745187374695,
                                            timeend: -8585237741842118940
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "done",
                                            timestart: -8585237741842118940,
                                            timeend: -8585237741821452983
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "check",
                                            timestart: -8585237741821452983,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: []
                                },
                                {
                                    Name: "Operation 5_4",
                                    Tag: "Операция 5",
                                    Failure: 0,
                                    Stops: 0,
                                    Status: [
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "inwork",
                                            timestart: -8585237742299949484,
                                            timeend: -8585237742293746344
                                        },
                                        {
                                            Worker: {
                                                User: "Работник 2",
                                                Role: Worker
                                            },
                                            Status: "done",
                                            timestart: -8585237742293746344,
                                            timeend: -8585237741891271082
                                        },
                                        {
                                            Worker: {
                                                User: "Проверяющий 1",
                                                Role: "specialist"
                                            },
                                            Status: "check",
                                            timestart: -8585237741891271082,
                                            timeend: 0
                                        }
                                    ],
                                    Fields: null,
                                    Notes: []
                                }
                            ],
                            LastStatus: "check"
                        }
                    ],
                    LastStatus: "check"
                }
            ],
            LastStatus: "inwork"
        }
    ],
    Fields: [],
    "CurChapterIndex": 1,
    "CurStageIndex": 1,
    "CurOperationIndex": 0,
    "CurStepIndex": 0,
    "CurentStep": {
        Name: "Operation 5_1",
        Tag: "Операция 5",
        Failure: 0,
        Stops: 0,
        Status: [
            {
                Worker: {
                    User: "Работник 1",
                    Role: Worker
                },
                Status: "inwork",
                timestart: -8585237748141766396,
                timeend: -8585237747914745678
            },
            {
                Worker: {
                    User: "Работник 1",
                    Role: Worker
                },
                Status: "done",
                timestart: -8585237747914745678,
                timeend: -8585237744765724927
            },
            {
                Worker: {
                    User: "Работник 2",
                    Role: Worker
                },
                Status: "inwork",
                timestart: -8585237744765724927,
                timeend: -8585237741683998635
            },
            {
                Worker: {
                    User: "Проверяющий 1",
                    Role: "specialist"
                },
                Status: "done",
                timestart: -8585237741683998635,
                timeend: 0
            }
        ],
        Fields: null,
        Notes: [
            {
                "StartTime": -8585237748141766396,
                "Text": {
                    "Links": [],
                    "Messages": [
                        "2222222222222222222222222222",
                        ""
                    ]
                },
                "Audio": {
                    "Links": [
                        "C:/Users/Ogreb/AppData/LocalLow/petrosoft/Klimov menu systems\\audio_03_03_2023_11_28_3594.wav"
                    ],
                    "Messages": [
                        "11111111111111111111111111111111",
                        ""
                    ]
                },
                "Video": {
                    "Links": [],
                    "Messages": []
                },
                "Photo": {
                    "Links": [],
                    "Messages": [
                        ""
                    ]
                }
            },
            {
                "StartTime": -8585237744765724927,
                "Text": {
                    "Links": [],
                    "Messages": [
                        "2222222222222222222222222222",
                        ""
                    ]
                },
                "Audio": {
                    "Links": [],
                    "Messages": [
                        ""
                    ]
                },
                "Video": {
                    "Links": [],
                    "Messages": []
                },
                "Photo": {
                    "Links": [],
                    "Messages": []
                }
            }
        ]
    },
    LastStatus: "inwork",
    "LastWorker": "Проверяющий 1",
    "LastWorkerRole": "specialist",
    "LastError": {
        ID: 3,
        Title: "Ожидание ДСЕ (дефицит) ",
        Description: "Невозможность продолжения сборочного/испытательного процессов по дефициту двигателей собственного производства "
    }
}

export { localItems }