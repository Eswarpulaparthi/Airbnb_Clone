const data = [
  {
    name: "Jack",
    place: "San Diego",
    price: 127.43,
    date: "2023-12-28",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-620945252721714880/original/6956d1c3-f65f-4a23-b324-a6bd96e6e2f5.jpeg?im_w=720",
  },
  {
    name: "Grace",
    place: "Chicago",
    price: 390.2,
    date: "2024-10-28",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-1308352341231973469/original/ab333cb6-7874-4383-9f87-2e6cc9ade862.jpeg?im_w=720",
  },
  {
    name: "Hank",
    place: "Phoenix",
    price: 63.21,
    date: "2024-11-22",
    img: "https://a0.muscache.com/im/pictures/7eb5a42a-34be-4460-ba01-ce745de064eb.jpg?im_w=720",
  },
  {
    name: "Ivy",
    place: "Dallas",
    price: 492.1,
    date: "2024-09-06",
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-749362996168607044/original/f40c8bfc-b4c1-4afe-97f2-a70f59a6d892.jpeg?im_w=720",
  },
  {
    name: "Jack",
    place: "Chicago",
    price: 241.08,
    date: "2024-08-13",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096954547021163083/original/649b4f6d-211b-4754-b9bd-3c8d76980120.jpeg?im_w=720",
  },
  {
    name: "Daisy",
    place: "New York",
    price: 328.74,
    date: "2024-03-20",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-691309129299425143/original/41775fed-4782-4cf4-9343-ef2f471471ff.jpeg?im_w=720",
  },
  {
    name: "Charlie",
    place: "San Antonio",
    price: 287.56,
    date: "2024-08-14",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-837654001202334074/original/878c8fe6-713d-4ff0-8dce-19110d271dc2.jpeg?im_w=720",
  },
  {
    name: "Daisy",
    place: "Phoenix",
    price: 107.49,
    date: "2024-02-18",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1096410574269495242/original/7678b158-f13b-415d-9f7c-470a42547b7e.jpeg?im_w=720",
  },
  {
    name: "Hank",
    place: "San Antonio",
    price: 150.18,
    date: "2024-05-30",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1248565129891389426/original/591ff517-3ef9-44ee-a4e8-69b64d099e18.jpeg?im_w=720",
  },
  {
    name: "Daisy",
    place: "San Antonio",
    price: 33.44,
    date: "2024-09-04",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1304495734054981296/original/168ff327-4cf6-451c-9c7b-850e755cb44e.png?im_w=720",
  },
  {
    name: "Jack",
    place: "Phoenix",
    price: 318.13,
    date: "2024-04-19",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1304495734054981296/original/3e519665-609c-487b-bd23-dcbe08b7bdd3.png?im_w=720",
  },
  {
    name: "Jack",
    place: "New York",
    price: 58.96,
    date: "2024-04-04",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1304495734054981296/original/116dee42-4bd2-48d1-ae23-d456c3cc7450.png?im_w=720",
  },
  {
    name: "Bob",
    place: "Los Angeles",
    price: 329.49,
    date: "2024-03-14",
    img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1248565129891389426/original/a06aa9ed-2684-4489-b340-6073ace698f9.jpeg?im_w=720",
  },
  {
    name: "Charlie",
    place: "San Diego",
    price: 53.31,
    date: "2024-05-05",
    img: "https://picsum.photos/220/441",
  },
  {
    name: "Grace",
    place: "Dallas",
    price: 337.29,
    date: "2024-04-07",
    img: "https://picsum.photos/258/460",
  },
  {
    name: "Hank",
    place: "San Jose",
    price: 278.5,
    date: "2024-05-19",
    img: "https://picsum.photos/159/492",
  },
  {
    name: "Ivy",
    place: "Philadelphia",
    price: 114.86,
    date: "2024-03-13",
    img: "https://picsum.photos/479/193",
  },
  {
    name: "Frank",
    place: "Los Angeles",
    price: 226.24,
    date: "2024-03-09",
    img: "https://picsum.photos/292/500",
  },
  {
    name: "Ivy",
    place: "San Diego",
    price: 367.19,
    date: "2024-07-21",
    img: "https://picsum.photos/253/102",
  },
  {
    name: "Bob",
    place: "Dallas",
    price: 332.62,
    date: "2024-04-04",
    img: "https://picsum.photos/166/136",
  },
  {
    name: "Grace",
    place: "San Diego",
    price: 228.58,
    date: "2024-03-22",
    img: "https://picsum.photos/272/322",
  },
  {
    name: "Hank",
    place: "San Diego",
    price: 236.63,
    date: "2024-11-24",
    img: "https://picsum.photos/426/348",
  },
  {
    name: "Alice",
    place: "Houston",
    price: 478.08,
    date: "2024-09-21",
    img: "https://picsum.photos/199/218",
  },
  {
    name: "Charlie",
    place: "Dallas",
    price: 329.86,
    date: "2024-05-02",
    img: "https://picsum.photos/471/473",
  },
  {
    name: "Daisy",
    place: "Dallas",
    price: 454.74,
    date: "2024-08-26",
    img: "https://picsum.photos/424/459",
  },
  {
    name: "Eve",
    place: "Dallas",
    price: 447.41,
    date: "2024-01-23",
    img: "https://picsum.photos/193/450",
  },
  {
    name: "Daisy",
    place: "San Diego",
    price: 400.38,
    date: "2024-01-28",
    img: "https://picsum.photos/464/402",
  },
  {
    name: "Frank",
    place: "Phoenix",
    price: 37.29,
    date: "2024-05-16",
    img: "https://picsum.photos/429/220",
  },
  {
    name: "Jack",
    place: "Phoenix",
    price: 204.07,
    date: "2024-07-14",
    img: "https://picsum.photos/127/353",
  },
  {
    name: "Ivy",
    place: "Houston",
    price: 227.48,
    date: "2024-01-30",
    img: "https://picsum.photos/493/441",
  },
  {
    name: "Ivy",
    place: "San Jose",
    price: 27.9,
    date: "2024-02-26",
    img: "https://picsum.photos/445/237",
  },
  {
    name: "Grace",
    place: "San Diego",
    price: 343.56,
    date: "2024-05-14",
    img: "https://picsum.photos/433/106",
  },
  {
    name: "Grace",
    place: "Houston",
    price: 199.93,
    date: "2024-02-17",
    img: "https://picsum.photos/297/296",
  },
  {
    name: "Charlie",
    place: "San Jose",
    price: 256.39,
    date: "2024-10-08",
    img: "https://picsum.photos/388/408",
  },
  {
    name: "Jack",
    place: "Philadelphia",
    price: 307.25,
    date: "2024-07-26",
    img: "https://picsum.photos/325/255",
  },
  {
    name: "Eve",
    place: "Dallas",
    price: 368.75,
    date: "2024-04-29",
    img: "https://picsum.photos/225/363",
  },
  {
    name: "Ivy",
    place: "New York",
    price: 56.81,
    date: "2024-03-28",
    img: "https://picsum.photos/177/196",
  },
  {
    name: "Eve",
    place: "Dallas",
    price: 372.47,
    date: "2024-11-02",
    img: "https://picsum.photos/460/462",
  },
  {
    name: "Grace",
    place: "San Antonio",
    price: 371.09,
    date: "2024-02-26",
    img: "https://picsum.photos/191/280",
  },
  {
    name: "Grace",
    place: "San Diego",
    price: 37.54,
    date: "2024-01-10",
    img: "https://picsum.photos/379/482",
  },
  {
    name: "Frank",
    place: "San Diego",
    price: 74.6,
    date: "2024-08-15",
    img: "https://picsum.photos/157/198",
  },
  {
    name: "Bob",
    place: "San Jose",
    price: 284.95,
    date: "2024-03-13",
    img: "https://picsum.photos/361/390",
  },
  {
    name: "Charlie",
    place: "Houston",
    price: 355.57,
    date: "2024-01-05",
    img: "https://picsum.photos/234/372",
  },
  {
    name: "Daisy",
    place: "San Antonio",
    price: 199.65,
    date: "2024-11-28",
    img: "https://picsum.photos/251/265",
  },
  {
    name: "Frank",
    place: "Chicago",
    price: 189.37,
    date: "2024-09-27",
    img: "https://picsum.photos/364/122",
  },
  {
    name: "Bob",
    place: "San Jose",
    price: 299.94,
    date: "2024-06-04",
    img: "https://picsum.photos/360/108",
  },
  {
    name: "Ivy",
    place: "Philadelphia",
    price: 286.48,
    date: "2024-03-11",
    img: "https://picsum.photos/411/355",
  },
  {
    name: "Frank",
    place: "San Diego",
    price: 286.65,
    date: "2024-07-06",
    img: "https://picsum.photos/366/273",
  },
];

export default data;
