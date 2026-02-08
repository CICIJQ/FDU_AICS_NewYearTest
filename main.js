
// 1. 题库配置
const questions = [
    {
        title: "1. 春节收到红包后，你的第一反应是？",
        options: [
            { text: "A. 计划买课程/设备，投资学习", mbti: { J: 1, T: 1 }, arch: { strongly_consistent: 1 } },
            { text: "B. 立刻约同学聚餐/玩剧本杀/打球...", mbti: { E: 1, F: 1, P: 1 }, arch: { event_driven: 1 } },
            { text: "C. 存起来，等有明确需求再动用", mbti: { I: 1, J: 1 }, arch: { high_availability: 1 } },
            { text: "D. 买点好玩的小物件，情绪价值 + 10086", mbti: { P: 1, F: 1 }, arch: { low_latency: 1 } }
        ]
    },
    {
        title: "2. 面对“年夜饭桌上被问专业”时，你通常？",
        options: [
            { text: "A. 热情解释AI能做什么，现场做起演示", mbti: { E: 1, N: 1 }, arch: { event_driven: 1, microservices: 1 } },
            { text: "B. 简单说“做计算机的”，然后转移话题", mbti: { I: 1, S: 1 }, arch: { low_latency: 1 } },
            { text: "C. 认真介绍学院的专业方向", mbti: { T: 1, J: 1 }, arch: { strongly_consistent: 1 } },
            { text: "D. 开玩笑说“修电脑的”，轻松带过", mbti: { F: 1, P: 1 }, arch: { eventual_consistent: 1 } }
        ]
    },
    {
        title: "3. 春节期间，你最想用 AI 做什么？",
        options: [
            { text: "A. 写一个春节主题的创意小游戏，发给家人朋友玩", mbti: { E: 1, N: 1, P: 1 }, arch: { event_driven: 1, microservices: 1 } },
            { text: "B. 当“赛博嘴替”，陪自己和家人唠嗑", mbti: { E: 1, F: 1, P: 1 }, arch: { event_driven: 1, low_latency: 1 } },
            { text: "C. 用AI辅助完成一篇论文或开源项目，悄悄努力卷到飞起", mbti: { I: 1, N: 1, J: 1 }, arch: { high_availability: 1 } },
            { text: "D. 帮长辈解决手机电脑问题，成为全家“IT顾问”", mbti: { E: 1, S: 1, T: 1 }, arch: { low_latency: 1, microservices: 1 } }
        ]
    },
    {
        title: "4. 寒假中，你的典型状态是？",
        options: [
            { text: "A. 家人唠嗑时默默看起论文，世界纷扰雨我无瓜", mbti: { I: 1, N: 1, J: 1 }, arch: { high_availability: 1 } },
            { text: "B. 疯狂社交，聚餐一场接一场", mbti: { E: 1, S: 1, P: 1 }, arch: { microservices: 1, event_driven: 1 } },
            { text: "C. 看剧打游戏，断绝生产学术垃圾的可能", mbti: { I: 1, P: 1 }, arch: { low_latency: 1 } },
            { text: "D. 装路由、搞NAS、配电视盒，数字化改造全家（师傅你是干什么的x）", mbti: { E: 1, S: 1, T: 1, J: 1 }, arch: { monolith: 1, strongly_consistent: 1 } }
        ]
    },
    {
        title: "5. 如果在春节期间突然接到一个紧急项目需求，你会？",
        options: [
            { text: "A. 立刻拉群分工，除夕夜前火速上线", mbti: { E: 1, S: 1, J: 1 }, arch: { microservices: 1, low_latency: 1 } },
            { text: "B. 先写详细需求文档，节后稳步推进", mbti: { I: 1, T: 1, J: 1 }, arch: { strongly_consistent: 1, monolith: 1 } },
            { text: "C. 用AI快速生成原型，先应付一下", mbti: { P: 1, N: 1 }, arch: { eventual_consistent: 1, low_latency: 1 } },
            { text: "D. 选择性失联，年后再说（离线状态）", mbti: { I: 1, P: 1 }, arch: { low_latency: 1 } }
        ]
    },
    {
        title: "6. 你借助大模型写代码时，最常说的提示词是？（多选）",
        multi: true,
        options: [
            { text: "A. “给我生成完整可运行的代码”", mbti: { J: 2, T: 1 }, arch: { monolith: 1, strongly_consistent: 1 } },
            { text: "B. “别又给我生成一堆TODO”", mbti: { T: 1, J: 1 }, arch: { strongly_consistent: 1, monolith: 1 } },
            { text: "C. “能先跑起来再说吗”", mbti: { P: 1, S: 1 }, arch: { low_latency: 1, eventual_consistent: 1 } },
            { text: "D. “别自作聪明优化”", mbti: { T: 1, J: 1 }, arch: { monolith: 1, high_availability: 1 } },
            { text: "E. “注释和代码对不上 / 你这代码根本编译不过”", mbti: { S: 1, T: 2 }, arch: { strongly_consistent: 1 } }
        ]
    },
    {
        title: "7. 面对 ddl，你更倾向于：",
        options: [
            { text: "A. 两周前就开始拆任务", mbti: { J: 2, T: 1 }, arch: { strongly_consistent: 1 } },
            { text: "B. 一个晚上，一台电脑，一个AI，创造一个奇迹", mbti: { P: 2, E: 1 }, arch: { low_latency: 1, event_driven: 1 } },
            { text: "C. 看情况，如果是喜欢的内容就早做", mbti: { N: 1, F: 1 }, arch: { eventual_consistent: 1 } },
            { text: "D. 先找 AI 问问这活有没有最短路径", mbti: { T: 1, P: 1 }, arch: { microservices: 1 } }
        ]
    },
    {
        title: "8. 新的一年你最期待的状态是？",
        options: [
            { text: "A. 手上的项目一个个稳稳落地", mbti: { I: 1, S: 1, T: 1, J: 1 }, arch: { monolith: 1, strongly_consistent: 1 } },
            { text: "B. 不断尝试新东西，什么新框架都想玩", mbti: { E: 1, N: 1, P: 1 }, arch: { microservices: 1, eventual_consistent: 1 } },
            { text: "C. 发掘到一两个长线方向，慢慢深挖", mbti: { I: 1, N: 1, J: 1 }, arch: { high_availability: 1 } },
            { text: "D. 保持低功耗，能不动脑就不动脑", mbti: { I: 1, S: 1, P: 1 }, arch: { monolith: 1, low_latency: 1 } }
        ]
    },
    {
        title: "9. 新学期，你遇到了一个心动的男生/女生，你会？",
        options: [
            { text: "A. 当即展开猛烈追求", mbti: { E: 2, F: 1, P: 1 }, arch: { event_driven: 1, eventual_consistent: 1 } },
            { text: "B. 做个计划徐徐图之", mbti: { I: 1, T: 1, J: 2 }, arch: { strongly_consistent: 1, monolith: 1 } },
            { text: "C. 天天内心尖叫地路过，表面毫无波澜", mbti: { I: 2, F: 2 }, arch: { high_availability: 1, strongly_consistent: 1 } },
            { text: "D. 保持距离，不能影响自己拔剑的速度", mbti: { I: 1, T: 2, J: 1 }, arch: { low_latency: 1, monolith: 1 } }
        ]
    }
];

// 2. 结果模板配置
const resultsMap = {
    arch: {
    event_driven: {
    llm: "Gemini 3 Pro・创意与表达",
    wish: "你的思维偏向由灵感驱动，新点子来得又快又多。新的一年，关键不在于再多几个创意，而在于把已出现的想法清晰地走完一条完整路径。可以给自己定个简单的原则，同一时间只推进一个创意，其余的先记录、不立刻展开。重点是明确做到什么程度就算完成，避免长期留在“还能再想想”的状态。"
    },

    strongly_consistent: {
        llm: "GPT-5.2・逻辑与质量",
        wish: "你对逻辑的一致性和工作完成的质量有天然的高要求，这是很强的优势。新的一年，可以在此基础上把精力分层：重要项目依然保持高标准，而探索性任务则允许先完成、再优化。既不削弱你对质量的要求，也能让你更快地验证新方向，避免因过度打磨而延缓行动。"
    },

    microservices: {
        llm: "DeepSeek・探索与创新",
        wish: "你的学习和尝试往往是多点并行的，这让你接触面很广。新的一年，与其继续扩展新的方向，不如做一次整合。挑选几个你已经尝试过的技术，设计一个需要它们共同发挥作用的项目，重点放在如何协同，而不是单个技术本身，这会让你的探索转化为更扎实的系统能力。"
    },

    high_availability: {
        llm: "Claude 4.5・规划与整理",
        wish: "你擅长长期投入，也能在复杂任务中保持稳定输出。新的一年，在继续深耕核心方向的同时，可以有意识地给自己留一些横向空间，接触不同领域或不同合作方式。定期回顾自己的节奏，确认在稳步推进，而不是被惯性推着向前，让你的长期投入始终保持方向感。"
    },

    low_latency: {
        llm: "Qwen・效率与执行",
        wish: "你处理事情的节奏很快，执行力是明显优势。新的一年，可以在保持速度的同时，多给成果一个沉淀步骤。把解决过的问题、形成的方法简单整理下来，逐渐积累成自己的经验库。当然也要刻意保留那类需要慢下来思考的任务，避免长期停留在只追求效率的状态。"
    }
    },
    personality: {
    ISTJ: {
        title: "ISTJ - 系统化执行者",
        desc: "你习惯用清晰的结构掌控节奏，开学不久就已经把整个学期拆解成可执行的计划。小组合作中你是最可靠的存在，文档规范、流程完整，让人一看就安心。对你来说，秩序感本身就是效率的一部分。"
    },
    ISFJ: {
        title: "ISFJ - 稳定型守护者",
        desc: "你总会默默把重点整理好，耐心回应每一个问题，是大家信赖的“信息中枢”。你对责任感要求很高，也因此对自己格外认真。你的细致与共情，让很多人走得更稳。"
    },
    INFJ: {
        title: "INFJ - 深度洞察者",
        desc: "你擅长从表象之下看到结构与意义，选题常常自带思想张力。你对概念和表达有自己的高标准，也愿意花时间打磨真正重要的东西。那些深夜的思考，最终都会沉淀成独特的视角。"
    },
    INTJ: {
        title: "INTJ - 高效架构师",
        desc: "你天生擅长规划路径、压缩冗余，总能用最优解完成复杂任务。你关注长期收益，善于提前布局，让努力都落在关键节点上。对你来说，高效不是赶，而是想清楚再行动。"
    },
    ISTP: {
        title: "ISTP - 问题拆解专家",
        desc: "你对系统和逻辑异常极其敏感，能迅速定位问题核心。面对复杂状况，你更愿意直接动手验证，用结果说话。你的冷静与实操能力，往往在关键时刻发挥决定性作用。"
    },
    ISFP: {
        title: "ISFP - 审美驱动型创作者",
        desc: "你对细节和美感有天然直觉，作品里常带着个人风格。无论是代码、笔记还是展示，你都希望它“看起来对、感觉也对”。你让理性世界多了一点温度与质感。"
    },
    INFP: {
        title: "INFP - 价值探索者",
        desc: "你习惯从更大的意义出发思考问题，对“为什么做”格外在意。你的表达往往真诚而有深度，即使过程不轻松，也愿意为认同的主题投入情感与时间。"
    },
    INTP: {
        title: "INTP - 思维探索者",
        desc: "你对知识本身充满好奇，喜欢不断追问底层原理。你的思路开放、跳跃，能在不同领域之间建立连接。你构建的是一张长期生长的认知网络。"
    },
    ESTP: {
        title: "ESTP - 行动型突破者",
        desc: "你在高压环境下反而状态拉满，擅长快速决策与即时应变。你相信实践出真知，很多成果正是在临场发挥中诞生。你的能量感，常常带动整个团队。"
    },
    ESFP: {
        title: "ESFP - 表达型感染者",
        desc: "你善于把复杂内容讲得生动有趣，让人愿意听、听得懂。你对氛围和反馈非常敏感，总能让合作过程更轻松。你的存在，本身就是一剂提振士气的良药。"
    },
    ENFP: {
        title: "ENFP - 灵感连接者",
        desc: "你擅长从不同领域中捕捉灵感，创意密度极高。你思维发散、视角新颖，常常提出让人眼前一亮的想法。你的价值在于打开可能性空间。"
    },
    ENTP: {
        title: "ENTP - 思辨型创新者",
        desc: "你享受观点碰撞的过程，敢于挑战既有结论。你的思维敏捷、表达直接，常常推动讨论走向更深层。对你来说，思考本身就是一种乐趣。"
    },
    ESTJ: {
        title: "ESTJ - 结果导向型组织者",
        desc: "你擅长统筹资源、推进进度，让事情真正落地。你目标清晰、执行力强，是团队中的稳定锚点。在你的带领下，计划往往不止停留在纸面。"
    },
    ESFJ: {
        title: "ESFJ - 协作型协调者",
        desc: "你对他人的状态非常敏感，擅长沟通与协调，让团队运转得更顺畅。你重视关系与信任，也愿意为集体多付出一点。你让合作变成一件“有人情味”的事。"
    },
    ENFJ: {
        title: "ENFJ - 成长型引导者",
        desc: "你善于鼓励他人、整合共识，常常成为团队的精神支点。你相信共同进步，也乐于记录和分享过程。你的影响力，来自真诚与投入。"
    },
    ENTJ: {
        title: "ENTJ - 战略型推进者",
        desc: "你擅长从长线视角规划路径，把目标拆解为可执行的阶段。你对成长高度自觉，行动果断，方向感极强。你的人生像一张不断更新的战略图。"
    }
    }
};

// 3. 状态管理
let currentIdx = 0;
let userAnswers = [];
let archScores = {};
let mbtiScores = {};
let userNickname = '';

// 4. 逻辑函数
function startQuiz() {
    document.getElementById('page-home').classList.remove('active');
    document.getElementById('page-quiz').classList.add('active');
    showQuestion(0);
}

// BGM: start on first interaction on the home page and keep looping
(() => {
    const bgm = document.getElementById('bgm');
    const home = document.getElementById('page-home');
    if (!bgm || !home) return;
    bgm.volume = 0.5;
    const tryPlay = () => {
        bgm.play().catch(() => {
            // Autoplay may be blocked; user can interact again
        });
    };
    home.addEventListener('click', tryPlay, { once: true });
    home.addEventListener('touchstart', tryPlay, { once: true });
})();

function showQuestion(index) {
    currentIdx = index;
    const q = questions[index];

    // ????
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').innerText = `${index + 1}/${questions.length}`;

    document.getElementById('question-title').innerText = q.title;
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    const isMulti = !!q.multi;
    const selected = Array.isArray(userAnswers[index]) ? userAnswers[index] : [];

    q.options.forEach((opt, i) => {
        const btn = document.createElement('div');
        btn.className = 'option-btn';
        if (isMulti && selected.includes(i)) btn.classList.add('selected');
        btn.innerText = opt.text;
        btn.onclick = () => {
            if (isMulti) {
                toggleSelection(i, btn);
            } else {
                selectOption(opt);
            }
        };
        optionsList.appendChild(btn);
    });

    // ??????
    document.getElementById('btn-prev').style.display = index > 0 ? 'block' : 'none';

    const btnNext = document.getElementById('btn-next');
    if (btnNext) {
        btnNext.style.display = isMulti ? 'block' : 'none';
        btnNext.disabled = !isMulti || selected.length === 0;
    }
}

function selectOption(opt) {
    userAnswers[currentIdx] = opt;
    if (currentIdx < questions.length - 1) {
        showQuestion(currentIdx + 1);
    } else {
        showNicknamePage();
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        showQuestion(currentIdx - 1);
    }
}

function toggleSelection(optionIndex, btn) {
    let selected = userAnswers[currentIdx];
    if (!Array.isArray(selected)) selected = [];
    const pos = selected.indexOf(optionIndex);
    if (pos >= 0) {
        selected.splice(pos, 1);
        btn.classList.remove('selected');
    } else {
        selected.push(optionIndex);
        btn.classList.add('selected');
    }
    userAnswers[currentIdx] = selected;
    updateNextButtonState();
}

function updateNextButtonState() {
    const btnNext = document.getElementById('btn-next');
    const q = questions[currentIdx];
    if (!btnNext) return;
    if (!q || !q.multi) {
        btnNext.style.display = 'none';
        return;
    }
    const selected = userAnswers[currentIdx];
    btnNext.disabled = !Array.isArray(selected) || selected.length == 0;
}

function nextFromMulti() {
    const q = questions[currentIdx];
    if (q && q.multi) {
        const selected = userAnswers[currentIdx];
        if (!Array.isArray(selected) || selected.length == 0) return;
    }
    if (currentIdx < questions.length - 1) {
        showQuestion(currentIdx + 1);
    } else {
        showNicknamePage();
    }
}

function showNicknamePage() {
    document.getElementById('page-quiz').classList.remove('active');
    document.getElementById('page-nickname').classList.add('active');
    const input = document.getElementById('nickname-input');
    if (input) {
        input.value = userNickname || '';
        setTimeout(() => input.focus(), 0);
    }
}

function proceedToResult() {
    const input = document.getElementById('nickname-input');
    userNickname = input ? input.value.trim() : '';
    if (!userNickname) {
        alert('请先填写昵称');
        if (input) input.focus();
        return;
    }
    if (userNickname.length > 6) {
        userNickname = userNickname.slice(0, 6);
        if (input) input.value = userNickname;
    }
    document.getElementById('page-nickname').classList.remove('active');
    processResult();
}

function processResult() {
    document.getElementById('page-quiz').classList.remove('active');
    document.getElementById('page-loading').classList.add('active');

    // ??
    const archTags = [
        'event_driven',
        'microservices',
        'monolith',
        'strongly_consistent',
        'eventual_consistent',
        'high_availability',
        'low_latency'
    ];

    archScores = Object.fromEntries(archTags.map(tag => [tag, 0]));
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    const addScores = (opt) => {
        if (!opt) return;
        const mbti = opt.mbti || {};
        const arch = opt.arch || {};
        Object.keys(mbti).forEach(k => { mbtiScores[k] = (mbtiScores[k] || 0) + mbti[k]; });
        Object.keys(arch).forEach(k => { archScores[k] = (archScores[k] || 0) + arch[k]; });
    };

    userAnswers.forEach((ans, idx) => {
        const q = questions[idx];
        if (Array.isArray(ans)) {
            ans.forEach(i => addScores(q.options[i]));
        } else {
            addScores(ans);
        }
    });

    const mbti = [
        mbtiScores.E >= mbtiScores.I ? 'E' : 'I',
        mbtiScores.S >= mbtiScores.N ? 'S' : 'N',
        mbtiScores.T >= mbtiScores.F ? 'T' : 'F',
        mbtiScores.J >= mbtiScores.P ? 'J' : 'P'
    ].join('');

    const topArch = archTags.reduce((a, b) => (archScores[a] >= archScores[b] ? a : b));
    const archFallback = { monolith: 'strongly_consistent', eventual_consistent: 'event_driven' };
    const archKey = resultsMap.arch[topArch] ? topArch : archFallback[topArch];

    // ????
    const persData = resultsMap.personality[mbti];
    const archData = archKey ? resultsMap.arch[archKey] : null;

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    };
    setText('res-horse-type', persData ? persData.title : mbti);
    setText('res-desc', persData ? persData.desc : '');
    setText('res-advantage', '');
    setText('res-warning', '');
    setText('res-llm', archData ? archData.llm : '');
    setText('res-wish', archData ? archData.wish : '');
    setText('res-nickname', userNickname ? `${userNickname}` : '');

    setTimeout(() => {
        document.getElementById('page-loading').classList.remove('active');
        document.getElementById('page-result').classList.add('active');
    }, 2000);
}

function copyResult() {
    const horse = document.getElementById('res-horse-type').innerText;
    const llm = document.getElementById('res-llm').innerText;
    const wish = document.getElementById('res-wish').innerText;
    const text = `我的2026码农马型人格是：【${horse}】！\n本命大模型：${llm}\n新年寄语：${wish}\n—— 复旦计院2026春节小测试`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert('结果已复制到剪贴板，快去朋友圈分享吧！');
    }).catch(() => {
        alert('复制失败，请手动截屏分享');
    });
}

function restartQuiz() {
    // Reset state
    currentIdx = 0;
    userAnswers = [];
    archScores = {};
    mbtiScores = {};
    userNickname = '';

    // Reset UI to home
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page-home').classList.add('active');

    // Reset progress display
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.innerText = `1/${questions.length}`;
}

// Nickname page events
(() => {
    const btnContinue = document.getElementById('btn-nickname-continue');
    const input = document.getElementById('nickname-input');
    const btnNext = document.getElementById('btn-next');
    if (btnContinue) btnContinue.addEventListener('click', proceedToResult);
    if (btnNext) btnNext.addEventListener('click', nextFromMulti);
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') proceedToResult();
        });
    }
})();

