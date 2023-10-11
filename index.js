const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\

## nH0pe  👋
<p align="center"><img src="https://github.com/guxiatongxue/guxiatongxue/blob/main/gif/RThN0hOS2GO4M.gif" /></p>

🌱 关于我
- 半吊子网络安全人员，都只能会一点点
- 忙于毕设-[tianji_Secret](https://github.com/guxiatongxue/tianji_Secret)
- 免杀来一点。代码审计来一点，渗透测试来一点，内网来一点，大杂烩
- 虽然很多，但也不精，专业打杂
- ...
</a>


## 今年汇总 ✨

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

⏰ Updated on ${new Date().toUTCString()}

---

<p align="center">
<img align="center" src="https://github-readme-stats-six-plum-27.vercel.app/api?username=guxiatongxue&show_icons=true&count_private=true&include_all_commits=true&line_height=21" alt="nH0pe's Github Stats" />
<img align="center" src="https://github-readme-stats-six-plum-27.vercel.app/api/top-langs/?username=guxiatongxue&hide_langs_below=1&theme=default&line_height=27&layout=compact" />
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/guxiatongxue/guxiatongxue/output/github-contribution-grid-snake-dark.svg">
<source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/guxiatongxue/guxiatongxue/output/github-contribution-grid-snake.svg">
<img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/guxiatongxue/guxiatongxue/output/github-contribution-grid-snake.svg">
</picture>
</p>
\
`

console.log(readme)