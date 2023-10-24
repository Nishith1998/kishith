import { EventObj } from "src/app/types";
import gsap from "gsap";

export const SHOW_AFTER_TIME = 1000;
export const BLUR_AFTER_TIME = 2000;
export const EVENT_INFO_TEMPLATE_TIME = 2500;

// export enum animations = {

// }

export enum EventName {
  sanji = 'Sanji'
}

export const EVENT_INFO: {[key: string]: any} = {
  [EventName.sanji]: {
    // Name: 'Sanji',
    "Time": '',
    "Venue": '',
    "Date": '',
    "Dress code": ''
  }
}

export const BRIDE_EVENT_LIST: EventObj[] = [
  {
    label: 'Sanji',
    isLoading: true,
    width: 'w-20',
    routePath: '/sanji',
    svgPath: 'https://media-public.canva.com/lzkFc/MAFAqvlzkFc/1/t.png',
    backgroundImage:
      'https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?w=2000',
  },
  // { label: "Haldi", routePath: "/haldi", svgPath: "https://media-public.canva.com/9p--U/MAFVys9p--U/1/tl.png", backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TKuT1oC6zts_C3q_At1V4yLmAuJAWZOVUph5uY2aCaHg2xnriXYxws5QmMyg5q2nG9k&usqp=CAU" },
  {
    label: 'Mamera',
    isLoading: true,
    routePath: '/mamera',
    svgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4twH8sS8wurrXHABS8t_xM_xzekLXJtf6-g&usqp=CAU',
    backgroundImage:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUAsAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAIhAAAwEBAAEEAwEBAAAAAAAAAAECAxESITFRYQQTQYEy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAB0RAAMBAQEAAwEAAAAAAAAAAAABAgMREhMhMQT/2gAMAwEAAhEDEQA/APu1+QEtunmToNnQ+evBI+heSR6C16atOkc2MmidwhTgq8zVXSdUEmBwByPVBKhKYSYyUC5HqgkxCoNUUSwGh6oNUT9C6Pm2gHJVOiGza+SFMJN/I+Nhbjp6E0GqIs9X7MerRXFKl1CXHBzoHyA8zPIYZ5DbBbBdAtncNUm0xdGtgNmjEfHJjYoX4mp8PP1g+ga6VRQ2aJYodL9CC0IqShUGqESw0xLQpod0JMUmEmakA0OTDTFIJMahbQ3oSYpMKWNlNgNDUwkxao7zRRGbYPkcqGza+SP9qN/aW5x5QLhss818neX2SftNWg3gPxlXkd5E6sJUcZ5GtnAJhI4zh8pUi37lOkk9Il0+z3JfQoY6GTS/UdDPO0k60PTGJ+glDJYjgmkNTDTFJheRqQtoaqN6I8/4hkepTni6AcjpfQvNJeovqSJN9n3ib4X5YIyY9Mo0/IXsmK/e3/STy6amWTmpHLJIrWoa0+yNMNMLhzhFiv7DmyWaGTRnBVQVTQ2aJZobLBE1JTLGSyeGOhmCaXDwtZItD0N0Qak9Lp62TJ/LjHZ0TaC1pUP0JtMu/hV49I9SWMTPNj83n/Uv/Dq/Nb/4n/WS/BfRTxrp6T0U+rYv9zp8n2IJurfabbKskVZfzJfbBean9K8iqPYmyKoRYp4S6M6k2iLaGmemp6K1x6hk/QEaeWeZw0fWXGD4DulPvotByzvHgSRwPUamMn3FoOTAGOkdLJ4HSYJofH8KM2TQ/YozAJ7PH2ItUWW+k9ydUHpR9Hn6SIuT0Lz6JrL6FOSubRC5YUS+lX6foPPD6M8hvRcBxhstxg7LEqzzNSJNNAs5KM5MiB8wEiK76FMh+HobMjFIXCd0Sa4d9eErz4z1/DonXDoSYUa8/TzHHqD4llZguAujvZL4mpDnAPiEY7BkYmBw1ehvkTWg+KKc6RCqDWvDPBNpsiBPpvh0DNlELo65PYr6EvLoLxLVHf4Esuk1SB8pAsfoZGBasfUdOH0LaBrcjzxKIyKZx+hs5L4MJ62J5zHTnwdOYxQaIrQTMDFAxSEpNFOxakJx1DEvQ3xOB9EW2H9SJ3mepUpok0hJmjY06RVAtwV1IqkGmMdE1SKZTSEWNkn0oU64A9OG2TaNj5k83fRo3MryZHL4OiuG0j6y02ehn6j5khz1XyU5/kT7MmqWSXNFUx8jZgnnePkYt557iHLJ3ND1PA0kTr8ifkJbI7ywHNFCRqELVfISvp3lgOWONAkOTuAMI445tI4Eynwl1fWOuhFGDYQpi7Qxi79g0Mf4IpCLKKQi0Okm0JtES6Fen9JNCmDy/wCgw5UzTgj7dmq2g/20jDjOIxpBfvpGrezjjOIByh2e1Mqyts04XSQjRIsyXSvKFw44no8/RjplI044UTgt+4Do44wJC2xbNOOGoXQqjTgkaxNewi0ccPkm0JtSXU44pg8z+g//2Q==',
  },
  {
    label: 'Performance night',
    isLoading: true,
    routePath: '/performanceNight',
    svgPath: 'https://media-public.canva.com/Pjz-U/MAFviVPjz-U/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6riuwj_TfYA_GN2QjW0VN4KO8GMBt15nKKk55Skv1eGMArOqZwwEv9FhzSPZIAto6OY&usqp=CAU',
  },
  {
    label: 'Dandiya',
    isLoading: true,
    routePath: '/dandiya',
    width: 'w-20',
    svgPath: 'https://media-public.canva.com/nhz-A/MAFvvznhz-A/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgMLLW0SXe3BzLhergmvtVbPYU4YTtaCfkWmrFgmA&s',
  },
  {
    label: 'Mandap Ropan',
    isLoading: true,
    routePath: '/mandapRopan',
    width: 'h-14',
    svgPath: 'https://media-public.canva.com/jnf8k/MAEkPCjnf8k/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvTWPPFsD74lbYl24s1YoxVoZheUf6oOuQP5IMD3HpKD3VEgFJDYZXgmWP0VEjpBwZV4&usqp=CAU',
  },
  {
    label: 'Marriage',
    isLoading: true,
    routePath: '/marriage',
    width: 'w-20',
    svgPath: 'https://media-public.canva.com/7UCOY/MAFp2K7UCOY/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9WVy8jRcOWG9r93J33C4gdzBdXYdnhIFL2Cz5k6ov_ryVl6KKEiYEMp6_yw-W2q5QE&usqp=CAU',
  },
];

export const GROOM_EVENT_LIST: EventObj[] = [
  {
    label: 'Sanji',
    isLoading: true,
    width: 'w-20',
    routePath: '/sanji',
    svgPath: 'https://media-public.canva.com/lzkFc/MAFAqvlzkFc/1/t.png',
    backgroundImage:
      'https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?w=2000',
  },
  {
    label: 'Haldi',
    isLoading: true,
    width: 'w-20',
    routePath: '/haldi',
    svgPath: 'https://media-public.canva.com/9p--U/MAFVys9p--U/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TKuT1oC6zts_C3q_At1V4yLmAuJAWZOVUph5uY2aCaHg2xnriXYxws5QmMyg5q2nG9k&usqp=CAU',
  },
  {
    label: 'Mamera',
    isLoading: true,
    routePath: '/mamera',
    svgPath:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4twH8sS8wurrXHABS8t_xM_xzekLXJtf6-g&usqp=CAU',
    backgroundImage:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUAsAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAIhAAAwEBAAEEAwEBAAAAAAAAAAECAxESITFRYQQTQYEy/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EAB0RAAMBAQEAAwEAAAAAAAAAAAABAgMREhMhMQT/2gAMAwEAAhEDEQA/APu1+QEtunmToNnQ+evBI+heSR6C16atOkc2MmidwhTgq8zVXSdUEmBwByPVBKhKYSYyUC5HqgkxCoNUUSwGh6oNUT9C6Pm2gHJVOiGza+SFMJN/I+Nhbjp6E0GqIs9X7MerRXFKl1CXHBzoHyA8zPIYZ5DbBbBdAtncNUm0xdGtgNmjEfHJjYoX4mp8PP1g+ga6VRQ2aJYodL9CC0IqShUGqESw0xLQpod0JMUmEmakA0OTDTFIJMahbQ3oSYpMKWNlNgNDUwkxao7zRRGbYPkcqGza+SP9qN/aW5x5QLhss818neX2SftNWg3gPxlXkd5E6sJUcZ5GtnAJhI4zh8pUi37lOkk9Il0+z3JfQoY6GTS/UdDPO0k60PTGJ+glDJYjgmkNTDTFJheRqQtoaqN6I8/4hkepTni6AcjpfQvNJeovqSJN9n3ib4X5YIyY9Mo0/IXsmK/e3/STy6amWTmpHLJIrWoa0+yNMNMLhzhFiv7DmyWaGTRnBVQVTQ2aJZobLBE1JTLGSyeGOhmCaXDwtZItD0N0Qak9Lp62TJ/LjHZ0TaC1pUP0JtMu/hV49I9SWMTPNj83n/Uv/Dq/Nb/4n/WS/BfRTxrp6T0U+rYv9zp8n2IJurfabbKskVZfzJfbBean9K8iqPYmyKoRYp4S6M6k2iLaGmemp6K1x6hk/QEaeWeZw0fWXGD4DulPvotByzvHgSRwPUamMn3FoOTAGOkdLJ4HSYJofH8KM2TQ/YozAJ7PH2ItUWW+k9ydUHpR9Hn6SIuT0Lz6JrL6FOSubRC5YUS+lX6foPPD6M8hvRcBxhstxg7LEqzzNSJNNAs5KM5MiB8wEiK76FMh+HobMjFIXCd0Sa4d9eErz4z1/DonXDoSYUa8/TzHHqD4llZguAujvZL4mpDnAPiEY7BkYmBw1ehvkTWg+KKc6RCqDWvDPBNpsiBPpvh0DNlELo65PYr6EvLoLxLVHf4Esuk1SB8pAsfoZGBasfUdOH0LaBrcjzxKIyKZx+hs5L4MJ62J5zHTnwdOYxQaIrQTMDFAxSEpNFOxakJx1DEvQ3xOB9EW2H9SJ3mepUpok0hJmjY06RVAtwV1IqkGmMdE1SKZTSEWNkn0oU64A9OG2TaNj5k83fRo3MryZHL4OiuG0j6y02ehn6j5khz1XyU5/kT7MmqWSXNFUx8jZgnnePkYt557iHLJ3ND1PA0kTr8ifkJbI7ywHNFCRqELVfISvp3lgOWONAkOTuAMI445tI4Eynwl1fWOuhFGDYQpi7Qxi79g0Mf4IpCLKKQi0Okm0JtES6Fen9JNCmDy/wCgw5UzTgj7dmq2g/20jDjOIxpBfvpGrezjjOIByh2e1Mqyts04XSQjRIsyXSvKFw44no8/RjplI044UTgt+4Do44wJC2xbNOOGoXQqjTgkaxNewi0ccPkm0JtSXU44pg8z+g//2Q==',
  },
  // {
  //   label: 'Performance night',
  //   isLoading: true,
  //   routePath: '/performanceNight',
  //   svgPath: 'https://media-public.canva.com/Pjz-U/MAFviVPjz-U/1/tl.png',
  //   backgroundImage:
  //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6riuwj_TfYA_GN2QjW0VN4KO8GMBt15nKKk55Skv1eGMArOqZwwEv9FhzSPZIAto6OY&usqp=CAU',
  // },
  {
    label: 'Dandiya',
    isLoading: true,
    routePath: '/dandiya',
    width: 'w-20',
    svgPath: 'https://media-public.canva.com/nhz-A/MAFvvznhz-A/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgMLLW0SXe3BzLhergmvtVbPYU4YTtaCfkWmrFgmA&s',
  },
  {
    label: 'Mandap Ropan',
    isLoading: true,
    routePath: '/mandapRopan',
    width: 'h-14',
    svgPath: 'https://media-public.canva.com/jnf8k/MAEkPCjnf8k/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmvTWPPFsD74lbYl24s1YoxVoZheUf6oOuQP5IMD3HpKD3VEgFJDYZXgmWP0VEjpBwZV4&usqp=CAU',
  },
  {
    label: 'Marriage',
    isLoading: true,
    routePath: '/marriage',
    width: 'w-20',
    svgPath: 'https://media-public.canva.com/7UCOY/MAFp2K7UCOY/1/tl.png',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6g9WVy8jRcOWG9r93J33C4gdzBdXYdnhIFL2Cz5k6ov_ryVl6KKEiYEMp6_yw-W2q5QE&usqp=CAU',
  },
];

export const blurAfter = (miliSec: number) => {
  setTimeout(() => {
    gsap.fromTo(
      '.animated-container',
      { filter: 'blur(0px)' },
      { filter: 'blur(3px)', duration: 2 }
    );
  }, miliSec);
}