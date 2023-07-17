import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import React from "react";
import ExplorePost from "./subcomponent/ExplorePost";
import SearchBox from "./subcomponent/SearchBox";
import ExplorePost2 from "./subcomponent/ExplorePost2";
import ExplorePost1 from "./subcomponent/ExplorePost1";

let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;

const Explore = () => {
  const posts = [
    {
      id: 0,
      images: [
        {
          id: "asdfghfdcxvb",
          username: "kailash8799",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          caption:
            "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
          time: "",
          isvideo: false,
          hashtags: ["posts", "love"],
        },
        {
          id: "asdfghfcvvdcxvb",
          username: "dasharath07",
          userimage:
            "https://plus.unsplash.com/premium_photo-1661448623542-eb6ec42ec5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/350363435_2008614696146497_5054284732318692261_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Sykr0ifCBYkAX_JNSIx&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzExNDY0NzA4MTc2MjEyNzIxMQ%3D%3D.2-ccb7-5&oh=00_AfDE9NGrH9jB6jqkMnxOysBeC-CeuZd2fI8o0A8Oy093mg&oe=64BB4476&_nc_sid=b41fef",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["buddy", "janu"],
        },
        {
          id: "asdfghfcvvdccvxvb",
          username: "nilesh9106",
          userimage: "https://avatars.githubusercontent.com/u/97864081?v=4",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/343757043_1285409619056241_5894221887533366420_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=SxYQHRImH0gAX-xgWEG&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA5MDk0NDg1ODkzNDc4Njg4OA%3D%3D.2-ccb7-5&oh=00_AfDJ6dVokppI7Nbv2Wwe6vYgn93wd2HhL3bw9XM-R2KfRw&oe=64BA737A&_nc_sid=b41fef",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["baby", "india"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dasharath",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/351708358_6135564289885687_6519741987364001685_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Q-fOqnY4DRIAX_QCdDP&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExOTkyNzczOTI2NTIwNDg5Ng%3D%3D.2-ccb7-5&oh=00_AfDlH6Qrp5CiFaDBUY0zRcSMYmYXXsvqNIJMrDtczU2CJw&oe=64BA9DFD&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/351758734_990011895675106_8279348446799757155_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=_UHhcmE-o80AX-cOghR&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzExOTgwOTcyMTE0NDY2NTkyMg%3D%3D.2-ccb7-5&oh=00_AfBWS8rQvISogqBrm1XvN5uAoTKC-fEfmaLbvobG1KRsAA&oe=64BA4249&_nc_sid=b41fef",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-1.fna.fbcdn.net/v/t51.2885-15/358349201_3541860762801080_7487653754704439834_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.famd15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=0iisJLymVc8AX9ePPed&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0MjA2MDY2MzU4NTQzMzg4OA%3D%3D.2-ccb7-5&oh=00_AfA4IckcMwJT08O42a0zOSyxeqd6haypdfj8CCJZxidbdg&oe=64BA6744&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/350658370_183658280999369_8154665927624677857_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omi3xSITUDEAX8zGqce&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExNzU4MjQxODE5MDQ1MzgxNQ%3D%3D.2-ccb7-5&oh=00_AfB_5QfvaAI5Qvw0_2Zr9RqOGnBIrIIXWdwIe-RZkv4qLA&oe=64BAA471&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
      ],
    },
    {
      id: 1,
      images: [
        {
          id: "asdfghfdcxvb",
          username: "kailash8799",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          postlink:
            "https://instagram.famd15-1.fna.fbcdn.net/v/t51.2885-15/335675458_1920013738367366_3086674298281480561_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.famd15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=_0Bt6IgAFnkAX-kHlCk&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA1ODI2MjMzOTE2OTI0MTM1OA%3D%3D.2-ccb7-5&oh=00_AfDyVSDSsm4LMQ15XH4yuQyv-DGVJAX9OD1WZsVAy5epvQ&oe=64BADF64&_nc_sid=b41fef",
          caption:
            "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
          time: "",
          isvideo: false,
          hashtags: ["posts", "love"],
        },
        {
          id: "asdfghfcvvdcxvb",
          username: "dasharath07",
          userimage:
            "https://plus.unsplash.com/premium_photo-1661448623542-eb6ec42ec5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/318688420_5982345541777188_6142899702325291537_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=1Ax6k7TS-VcAX8yulOx&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjk4OTE3NDY2MzU5NTk2NjUwOA%3D%3D.2-ccb7-5&oh=00_AfAKThkZu9ZHVEcPO1ELcTLWuFI_a1RWMYdX7RdPQE_ptA&oe=64BB4C5C&_nc_sid=b41fef",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["buddy", "janu"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dasharath",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/351708358_6135564289885687_6519741987364001685_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Q-fOqnY4DRIAX_QCdDP&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExOTkyNzczOTI2NTIwNDg5Ng%3D%3D.2-ccb7-5&oh=00_AfDlH6Qrp5CiFaDBUY0zRcSMYmYXXsvqNIJMrDtczU2CJw&oe=64BA9DFD&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-1.fna.fbcdn.net/v/t51.2885-15/296964295_1216453879139799_8559805819307354189_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BGYhw955p_MAX8L22hg&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg5NTA5NzA4NTEwMDg4NDg5MA%3D%3D.2-ccb7-5&oh=00_AfDg1DOVrfXv7ooW8B0Pt9dml8Ol9qBVy9tdNqWiGFPnNw&oe=64BAB3D8&_nc_sid=b41fef",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/353577627_205337085800050_582486605235670258_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=3NU4VQ2yP2QAX-QzMib&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDk2MzM4NzQzNjY5OTk5NA%3D%3D.2-ccb7-5&oh=00_AfDhZ5s8UMovYRNPGrQtiYJlgxBh6wUg2atwHvSMv52GJw&oe=64B996FC&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/353577627_205337085800050_582486605235670258_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=3NU4VQ2yP2QAX-QzMib&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyNDk2MzM4NzQzNjY5OTk5NA%3D%3D.2-ccb7-5&oh=00_AfDhZ5s8UMovYRNPGrQtiYJlgxBh6wUg2atwHvSMv52GJw&oe=64B996FC&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/336247062_247457004289545_4121003916927279644_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=C5mCjfvGiTAAX9c9IUl&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA1ODU2MTU1NDI5ODYzODE1Nw%3D%3D.2-ccb7-5&oh=00_AfDIvkn_QFbDvhYDVs3176P1hhvxdpUZ1eT6S5IWOAF8og&oe=64BA536D&_nc_sid=b41fef",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          id: "asdfghfdcxvb",
          username: "kailash8799",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          caption:
            "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
          time: "",
          isvideo: false,
          hashtags: ["posts", "love"],
        },

        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-1.fna.fbcdn.net/v/t51.2885-15/358349201_3541860762801080_7487653754704439834_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.famd15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=0iisJLymVc8AX9ePPed&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0MjA2MDY2MzU4NTQzMzg4OA%3D%3D.2-ccb7-5&oh=00_AfA4IckcMwJT08O42a0zOSyxeqd6haypdfj8CCJZxidbdg&oe=64BA6744&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/350658370_183658280999369_8154665927624677857_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omi3xSITUDEAX8zGqce&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExNzU4MjQxODE5MDQ1MzgxNQ%3D%3D.2-ccb7-5&oh=00_AfB_5QfvaAI5Qvw0_2Zr9RqOGnBIrIIXWdwIe-RZkv4qLA&oe=64BAA471&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
      ],
    },
    {
      id: 1,
      images: [
        {
          id: "asdfghfdcxvb",
          username: "kailash8799",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
          caption:
            "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
          time: "",
          isvideo: false,
          hashtags: ["posts", "love"],
        },
        {
          id: "asdfghfcvvdcxvb",
          username: "dasharath07",
          userimage:
            "https://plus.unsplash.com/premium_photo-1661448623542-eb6ec42ec5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          postlink:
            "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["buddy", "janu"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dasharath",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/351708358_6135564289885687_6519741987364001685_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Q-fOqnY4DRIAX_QCdDP&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExOTkyNzczOTI2NTIwNDg5Ng%3D%3D.2-ccb7-5&oh=00_AfDlH6Qrp5CiFaDBUY0zRcSMYmYXXsvqNIJMrDtczU2CJw&oe=64BA9DFD&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/351708358_6135564289885687_6519741987364001685_n.webp?stp=dst-jpg_e35_p720x720&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Q-fOqnY4DRIAX_QCdDP&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExOTkyNzczOTI2NTIwNDg5Ng%3D%3D.2-ccb7-5&oh=00_AfDlH6Qrp5CiFaDBUY0zRcSMYmYXXsvqNIJMrDtczU2CJw&oe=64BA9DFD&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-1.fna.fbcdn.net/v/t51.2885-15/358349201_3541860762801080_7487653754704439834_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=instagram.famd15-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=0iisJLymVc8AX9ePPed&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0MjA2MDY2MzU4NTQzMzg4OA%3D%3D.2-ccb7-5&oh=00_AfA4IckcMwJT08O42a0zOSyxeqd6haypdfj8CCJZxidbdg&oe=64BA6744&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
        {
          id: "asdfdfghfcvvdccvxvb",
          username: "dilip231",
          userimage:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/360029942_130737243392370_4232524164229805425_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3ETDLWNuNwcAX99YILh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE0NjUzMjc5NTQxMzQ2MTEzOQ%3D%3D.2-ccb7-5&oh=00_AfAK-8nn8gGX-AZNNXrHsyaU_sa5zQSWbyXvXUdAwNOXZA&oe=64BA1BA3&_nc_sid=ee9879",
          postlink:
            "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-15/350658370_183658280999369_8154665927624677857_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=omi3xSITUDEAX8zGqce&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzExNzU4MjQxODE5MDQ1MzgxNQ%3D%3D.2-ccb7-5&oh=00_AfB_5QfvaAI5Qvw0_2Zr9RqOGnBIrIIXWdwIe-RZkv4qLA&oe=64BAA471&_nc_sid=ee9879",
          caption: "Oh no yes ",
          time: "",
          isvideo: false,
          hashtags: ["lover", "friends"],
        },
      ],
    },
  ];

  return (
    <>
      <ScrollView className="bg-white dark:bg-black">
        <SearchBox />
        {posts.map((item, key) => {
          return (
            <View
              key={
                (key + Math.random() * 10) *
                (new Date().getMilliseconds() * Math.random() * 10)
              }
            >
              {item?.id === 0 ? (
                <View
                  className="grid flex-row flex-wrap grid-cols-3"
                  key={key}
                >
                  {(item?.images).map((obj, key) => {
                    return (
                      <ExplorePost
                        postlink={obj?.postlink}
                        userimage={obj?.userimage}
                        username={obj?.username}
                        key={key}
                      />
                    );
                  })}
                </View>
              ) : null}
              {item?.id === 1 ? (
                <View className="flex flex-row" key={key}>
                  <View
                    style={{ width: width - width / 3 }}
                    className="grid flex-row flex-wrap grid-cols-2"
                  >
                    {item?.images.slice(0, 4).map((obj, key) => {
                      return (
                        <ExplorePost1
                          postlink={obj?.postlink}
                          userimage={obj?.userimage}
                          username={obj?.username}
                          key={key}
                          widthE={width / 3 - 3}
                          heightE={width / 3}
                        />
                      );
                    })}
                  </View>
                  <View>
                    <ExplorePost1
                      postlink={item?.images[4]?.postlink}
                      userimage={item?.images[4]?.userimage}
                      username={item?.images[4]?.username}
                      key={key+Math.random()*10}
                      widthE={width / 3 - 3}
                      heightE={2*(width / 3) + 3}
                    />
                  </View>
                </View>
              ) : null}
              {item?.id === 2 ? (
                <View className="flex flex-row" key={key}>
                  <View
                    style={{ width: width - width / 3 }}
                    className="grid flex-row flex-wrap grid-cols-2"
                  >
                   <ExplorePost2
                      postlink={item?.images[2]?.postlink}
                      userimage={item?.images[2]?.userimage}
                      username={item?.images[2]?.username}
                      key={key+Math.random()*10}
                      widthE={2*(width / 3) - 3}
                      heightE={2*(width / 3) + 3}
                    />
                  </View>
                  <View>
                     {item?.images.slice(0, 2).map((obj, key) => {
                      return (
                        <ExplorePost2
                          postlink={obj?.postlink}
                          userimage={obj?.userimage}
                          username={obj?.username}
                          key={key}
                          widthE={width / 3 - 3}
                          heightE={width / 3}
                        />
                      );
                    })}
                  </View>
                </View>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Explore;
