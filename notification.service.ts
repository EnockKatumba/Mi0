await LocalNotifications.schedule({
  notifications: [{
    title: "Good morning from Mi0!",
    body: "Time to add your tasks and check your mood.",
    id: 1,
    schedule: {
      on: { hour: 8, minute: 0 },
      repeats: true,
      every: 'day'
    },
  }],
});