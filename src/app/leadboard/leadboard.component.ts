import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

type WeekType = 'I' | 'II' | 'III' | 'IV';


interface LeaderboardItem {
customerId: number;
loginName: string;
place: number;
week: WeekType;
}

@Component({
  selector: 'app-leadboard',
  imports: [FormsModule],
  templateUrl: './leadboard.component.html',
  styleUrl: './leadboard.component.css'
})
export class LeadboardComponent implements OnInit { weekTypes: (WeekType | 'ALL')[] = ['I', 'II', 'III', 'IV', 'ALL'];
activeFilter: WeekType | 'ALL' = 'ALL';


leaderboard: LeaderboardItem[] = [];
filtered: LeaderboardItem[] = [];


ngOnInit(): void {
this.generateLeaderboard();
this.filterLeaderboard('ALL');
}


generateLeaderboard(): void {
const weeks: WeekType[] = ['I', 'II', 'III', 'IV'];
const data: LeaderboardItem[] = [];


for (const week of weeks) {
for (let i = 1; i <= 10; i++) {
data.push({
customerId: Math.floor(Math.random() * 10000),
loginName: this.generateRandomName(),
place: i,
week,
});
}
}


this.leaderboard = data;
}


generateRandomName(): string {
const chars = 'Asfadjasikojdfkasdowajdikasjdkasjelkwajedioasa';
let name = '';
for (let i = 0; i < 6; i++) {
name += chars.charAt(Math.floor(Math.random() * chars.length));
}
return name;
}


filterLeaderboard(week: WeekType | 'ALL'): void {
this.activeFilter = week;
if (week === 'ALL') {
this.filtered = [...this.leaderboard];
} else {
this.filtered = this.leaderboard.filter((item) => item.week === week);
}
}

}
