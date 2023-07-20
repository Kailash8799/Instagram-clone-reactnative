import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import ExplorePost from "./ExplorePost";

const MyVidoes = () => {
  const myposts = [
    {
      id: "asdfghfdcxvb",
      username: "kailash8799",
      userimage:
        "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
      postlink:
        "https://instagram.famd15-1.fna.fbcdn.net/v/t51.2885-15/335675458_1920013738367366_3086674298281480561_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.famd15-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=_0Bt6IgAFnkAX-kHlCk&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA1ODI2MjMzOTE2OTI0MTM1OA%3D%3D.2-ccb7-5&oh=00_AfDyVSDSsm4LMQ15XH4yuQyv-DGVJAX9OD1WZsVAy5epvQ&oe=64BADF64&_nc_sid=b41fef",
      caption: "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
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
  ];
  return (
    <ScrollView
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      nestedScrollEnabled={true}
    >
      <View className="grid flex-row flex-wrap grid-cols-3">
        {(myposts).map((obj, key) => {
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
    </ScrollView>
  );
};

export default MyVidoes;
