import { StreakService } from '../services/streak.service';

constructor(private streakService: StreakService) {}

async onTaskComplete() {
  // Your logic to mark task as done...

  const streak = await this.streakService.updateStreak('tasks');
  console.log(`Task streak: ${streak} days`);
}
