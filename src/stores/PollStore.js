import { writable } from 'svelte/store';

const pollStore = writable([
    {
      id: 1,
      question: "Python",
      answerA: "Python",
      answerB: "Python",
      votesA: 9,
      votesB: 10,
    },
]);

export default pollStore;