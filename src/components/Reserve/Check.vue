<template>
    <div class="main">
        <div>检查</div>
    </div>
</template>

<script>
import { reserveCheck, reserveForm } from '@/api/api'

export default {
  name: 'ReserveCheck',
  data () {
    return {
        "data": [
            {
                "weekday": 7,
                "date": "2021-05-23",
                "item": [
                    {
                        "id": 1,
                        "teacher": 38,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 39,
                        "reserve": 0
                    },
                    {
                        "id": 3,
                        "teacher": 40,
                        "reserve": 0
                    },
                    {
                        "id": 4,
                        "teacher": 41,
                        "reserve": 0
                    },
                    {
                        "id": 5,
                        "teacher": 42,
                        "reserve": 1
                    },
                    {
                        "id": 6,
                        "teacher": 43,
                        "reserve": 0
                    }
                ]
            },
            {
                "weekday": 1,
                "date": "2021-05-24",
                "item": [
                    {
                        "id": 1,
                        "teacher": 2,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 3,
                        "reserve": 1
                    },
                    {
                        "id": 3,
                        "teacher": 4,
                        "reserve": 1
                    },
                    {
                        "id": 4,
                        "teacher": 5,
                        "reserve": 1
                    },
                    {
                        "id": 5,
                        "teacher": 6,
                        "reserve": 1
                    },
                    {
                        "id": 6,
                        "teacher": 7,
                        "reserve": 1
                    }
                ]
            },
            {
                "weekday": 2,
                "date": "2021-05-25",
                "item": [
                    {
                        "id": 1,
                        "teacher": 8,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 9,
                        "reserve": 1
                    },
                    {
                        "id": 3,
                        "teacher": 10,
                        "reserve": 1
                    },
                    {
                        "id": 4,
                        "teacher": 11,
                        "reserve": 0
                    },
                    {
                        "id": 5,
                        "teacher": 12,
                        "reserve": 0
                    },
                    {
                        "id": 6,
                        "teacher": 13,
                        "reserve": 1
                    }
                ]
            },
            {
                "weekday": 3,
                "date": "2021-05-26",
                "item": [
                    {
                        "id": 1,
                        "teacher": 14,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 15,
                        "reserve": 1
                    },
                    {
                        "id": 3,
                        "teacher": 16,
                        "reserve": 1
                    },
                    {
                        "id": 4,
                        "teacher": 17,
                        "reserve": 1
                    },
                    {
                        "id": 5,
                        "teacher": 18,
                        "reserve": 1
                    },
                    {
                        "id": 6,
                        "teacher": 19,
                        "reserve": 1
                    }
                ]
            },
            {
                "weekday": 4,
                "date": "2021-05-27",
                "item": [
                    {
                        "id": 1,
                        "teacher": 20,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 21,
                        "reserve": 1
                    },
                    {
                        "id": 3,
                        "teacher": 22,
                        "reserve": 1
                    },
                    {
                        "id": 4,
                        "teacher": 23,
                        "reserve": 0
                    },
                    {
                        "id": 5,
                        "teacher": 24,
                        "reserve": 0
                    },
                    {
                        "id": 6,
                        "teacher": 25,
                        "reserve": 0
                    }
                ]
            },
            {
                "weekday": 5,
                "date": "2021-05-28",
                "item": [
                    {
                        "id": 1,
                        "teacher": 26,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 27,
                        "reserve": 1
                    },
                    {
                        "id": 3,
                        "teacher": 28,
                        "reserve": 1
                    },
                    {
                        "id": 4,
                        "teacher": 29,
                        "reserve": 1
                    },
                    {
                        "id": 5,
                        "teacher": 30,
                        "reserve": 1
                    },
                    {
                        "id": 6,
                        "teacher": 31,
                        "reserve": 0
                    }
                ]
            },
            {
                "weekday": 6,
                "date": "2021-05-29",
                "item": [
                    {
                        "id": 1,
                        "teacher": 32,
                        "reserve": 1
                    },
                    {
                        "id": 2,
                        "teacher": 33,
                        "reserve": 0
                    },
                    {
                        "id": 3,
                        "teacher": 34,
                        "reserve": 0
                    },
                    {
                        "id": 4,
                        "teacher": 35,
                        "reserve": 0
                    },
                    {
                        "id": 5,
                        "teacher": 36,
                        "reserve": 0
                    },
                    {
                        "id": 6,
                        "teacher": 37,
                        "reserve": 1
                    }
                ]
            }]
    }
  },
    methods:{

    },

}
</script>

<style scoped>
    @import url('../../assets/css/main.css');

</style>
