// ==============================
// 1. 题库配置（马年版 12 题）
// ==============================
const questions = [
    {
        title: "1. 过去一年中，你的精神状态被诊断为？（多选）",
        multi: true,
        options: [
            {
                text: "A.「规律马」每日定下作息，日程按计划执行，规则至上不摆烂",
                mbti: { I: 1, S: 1, J: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "B.「饿了马」开心奖励下午茶，疲惫犒劳夜宵，美食解决一切问题",
                mbti: { E: 1, S: 1, P: 1 },
                arch: { low_latency: 1 }
            },
            {
                text: "C.「苹什马」每每事后拍大腿\"这题我复习过！\"，\"这我早该想到了\"",
                mbti: { I: 1, T: 1, J: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "D.「皇阿马」台前从容高雅，落落大方，小组合作总能拿捏把控节奏",
                mbti: { E: 1, F: 1, J: 1 },
                arch: { high_availability: 1 }
            }
        ]
    },
    {
        title: "2. 身为“马”农，你可能对AI常说的提示词是？（多选）",
        multi: true,
        options: [
            {
                text: "A. \"给我生成完整可运行的代码\"",
                mbti: { J: 2, T: 1 },
                arch: { monolith: 1, strongly_consistent: 1 }
            },
            {
                text: "B. \"不要写一堆TODO，要马上能跑\"",
                mbti: { T: 1, J: 1 },
                arch: { strongly_consistent: 1, monolith: 1 }
            },
            {
                text: "C. \"能先跑起来再说吗？别纠结细节\"",
                mbti: { P: 1, S: 1 },
                arch: { low_latency: 1, eventual_consistent: 1 }
            },
            {
                text: "D. \"不要自作聪明优化，保持马力稳定输出\"",
                mbti: { T: 1, J: 1 },
                arch: { monolith: 1, high_availability: 1 }
            },
            {
                text: "E. \"代码编译不过，马失前蹄了吧\"",
                mbti: { S: 1, T: 2 },
                arch: { strongly_consistent: 1 }
            }
        ]
    },
    {
        title: "3. 打开 GitHub，注释区画风通常是？",
        options: [
            {
                text: "A.「马首是瞻」严格按逻辑写注释，详细又清晰",
                mbti: { I: 1, N: 1, J: 2 },
                arch: { monolith: 1, strongly_consistent: 1 }
            },
            {
                text: "B.「马赛克」大段代码内插入一条注释，零落又稀疏",
                mbti: { I: 1, T: 1, P: 1 },
                arch: { eventual_consistent: 1 }
            },
            {
                text: "C.「马屁精」注释内藏彩蛋，感谢老板提供本技术灵感",
                mbti: { E: 1, F: 1, P: 1 },
                arch: { event_driven: 1 }
            },
            {
                text: "D.「无马胜有马」代码自能解释一切，注释只有\"别动，能跑\"",
                mbti: { I: 1, T: 2, J: 1 },
                arch: { monolith: 1, eventual_consistent: 1 }
            }
        ]
    },
    {
        title: "4. 假期偶遇工作任务+1，你的完成姿态是？",
        options: [
            {
                text: "A. 提前两周拆项目，进度稳如老马识途",
                mbti: { J: 2, T: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "B. DDL前马力全开，一个夜晚一台电脑，创造奇迹",
                mbti: { P: 2, E: 1 },
                arch: { low_latency: 1, event_driven: 1 }
            },
            {
                text: "C. 喜欢的项目马不停蹄，无感的项目马马虎虎",
                mbti: { N: 1, F: 1 },
                arch: { eventual_consistent: 1 }
            },
            {
                text: "D. 选择性下线，一切工作节后再说",
                mbti: { I: 1, P: 1 },
                arch: { eventual_consistent: 1 }
            }
        ]
    },
    {
        title: "5. 庙会\"马蹄酥\"的长队排到了街口，你会？",
        options: [
            {
                text: "A. 老实排队，边刷攻略边等候，秩序就是安全感",
                mbti: { J: 1, T: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "B. 换马不换路，买个糖画做平替，灵活应变不内耗",
                mbti: { P: 1, F: 1 },
                arch: { eventual_consistent: 1 }
            },
            {
                text: "C. 请朋友当\"马前卒\"，约定\"排到了喊我\"",
                mbti: { E: 1, S: 1 },
                arch: { microservices: 1 }
            },
            {
                text: "D. 先逛逛庙会，返程时看队伍长短再决定",
                mbti: { I: 1, P: 1 },
                arch: { high_availability: 1 }
            }
        ]
    },
    {
        title: "6. 贴马年窗花，你选择的模式是？（多选）",
        multi: true,
        options: [
            {
                text: "A. 强迫症美学，尺子+水平仪双校准，各个窗花要对齐",
                mbti: { J: 1, T: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "B. 先贴一版再看效果，反复重贴触发迭代",
                mbti: { P: 1, N: 1 },
                arch: { event_driven: 1 }
            },
            {
                text: "C. 客厅\"奔马迎春\"、卧室\"小马纳福\"、厨房\"福马安康\"，凌乱又热闹",
                mbti: { E: 1, S: 1 },
                arch: { microservices: 1 }
            },
            {
                text: "D. 房间 C 位贴张\"马到成功\"，拒绝过度设计",
                mbti: { I: 1, T: 1 },
                arch: { monolith: 1 }
            }
        ]
    },
    {
        title: "7. 家族群发了红包雨，你的策略是？",
        options: [
            {
                text: "A. 手指悬停紧盯屏幕，马上到账无延迟",
                mbti: { T: 1, P: 1 },
                arch: { low_latency: 1 }
            },
            {
                text: "B. 开启智能红包提醒，高效灵活又躺赢",
                mbti: { T: 1, J: 1 },
                arch: { high_availability: 1 }
            },
            {
                text: "C. 边抢边陪长辈唠嗑，\"马年吉祥！抢到红包分您一半！\"",
                mbti: { E: 1, F: 1 },
                arch: { event_driven: 1 }
            },
            {
                text: "D. 年夜饭后再悠哉捡漏，缘分到了自然有",
                mbti: { I: 1, P: 1 },
                arch: { eventual_consistent: 1 }
            }
        ]
    },
    {
        title: "8. 收到红包里的满满压岁钱，你会？",
        options: [
            {
                text: "A. “码”力投资，买课买设备，蓄力技术升级",
                mbti: { J: 1, T: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "B. 马上组局！拉群约饭约桌游，社交能量拉满",
                mbti: { E: 1, F: 1, P: 1 },
                arch: { event_driven: 1 }
            },
            {
                text: "C. 进账存入小金库，静待刚需再启封",
                mbti: { I: 1, J: 1 },
                arch: { high_availability: 1 }
            },
            {
                text: "D. 买下新键盘新相机，情绪价值 + 10086",
                mbti: { P: 1, F: 1 },
                arch: { low_latency: 1 }
            }
        ]
    },
    {
        title: "9. 亲戚问起\"你是怎么搞 AI 的\"，你的反应是？",
        options: [
            {
                text: "A. 马上现场演示，热情科普 AI 怎么用",
                mbti: { E: 1, N: 1 },
                arch: { event_driven: 1, microservices: 1 }
            },
            {
                text: "B. 接个闹铃假装在忙，火速撤离现场",
                mbti: { I: 1, S: 1 },
                arch: { low_latency: 1 }
            },
            {
                text: "C. 严谨介绍学习方向，各类专业名词头头是道",
                mbti: { T: 1, J: 1 },
                arch: { strongly_consistent: 1 }
            },
            {
                text: "D. 推上几个链接，马虎过去不较真",
                mbti: { F: 1, P: 1 },
                arch: { eventual_consistent: 1 }
            }
        ]
    },
    {
        title: "10. 春节，你的宅家日常更像？",
        options: [
            {
                text: "A. 马不停蹄外出社交，聚会摸牌不停歇",
                mbti: { E: 1, S: 1, P: 1 },
                arch: { microservices: 1, event_driven: 1 }
            },
            {
                text: "B. 家人唠嗑雨我无瓜，默默窝角落看论文",
                mbti: { I: 1, N: 1, J: 1 },
                arch: { high_availability: 1 }
            },
            {
                text: "C. 看剧打游戏，拒绝生产学术垃圾",
                mbti: { I: 1, P: 1 },
                arch: { low_latency: 1 }
            },
            {
                text: "D. 购物扫尘装路由，主动干活改造全家",
                mbti: { E: 1, S: 1, T: 1, J: 1 },
                arch: { monolith: 1, strongly_consistent: 1 }
            }
        ]
    },
    {
        title: "11. 2026，你最想解锁哪种“马”力状态？",
        options: [
            {
                text: "A. 马到成功，刻苦钻研项目课题，稳稳落地接paper",
                mbti: { I: 1, S: 1, T: 1, J: 1 },
                arch: { monolith: 1, strongly_consistent: 1 }
            },
            {
                text: "B. 龙马精神，学习新知识新技术，多多尝试不设限",
                mbti: { E: 1, N: 1, P: 1 },
                arch: { microservices: 1, eventual_consistent: 1 }
            },
            {
                text: "C. 马不停蹄，高精力解锁各类爱好，元气满满爱自己",
                mbti: { E: 1, N: 1, P: 1 },
                arch: { high_availability: 1 }
            },
            {
                text: "D. 马放南山，休闲低耗埋头干，平平淡淡过全年",
                mbti: { I: 1, S: 1, J: 1 },
                arch: { monolith: 1, low_latency: 1 }
            }
        ]
    }
];


// ==============================
// 2. 结果模板配置（arch + MBTI）
// ==============================
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
            title: "ISTJ - 马道陈功",
            desc: "你习惯先把计划写好再行动，常常复盘你的To do list。小组合作中你是最可靠最安心的存在，对你来说，秩序感本身就是效率的一部分。"
        },
        ISFJ: {
            title: "ISFJ - 爱马士",
            desc: "你总会默默处理问题、补齐细节，回应每一个请求，是被大家信赖的朋友。你总有强烈的责任心，你的细致与共情，将助你走得更稳更远。"
        },
        INFJ: {
            title: "INFJ - 慢思小驹",
            desc: "你做事前总会先想清楚“为什么”，擅长从表象下看到意义。你愿意花时间打磨真正重要的东西，那些深夜独处时的思考最终都将沉淀成你独有的财富。"
        },
        INTJ: {
            title: "INTJ - 马力全开",
            desc: "你擅长规划路径，提前布局，总能用最优解完成复杂的任务，让努力都落在关键之处。对你来说，真正的高效是想清楚后再做行动。"
        },
        ISTP: {
            title: "ISTP - 解马专家",
            desc: "你喜欢直接上手解决问题，比起开会讨论，你更相信实测结果。你的冷静与实操能力，往往会在关键时刻发挥决定性的作用。"
        },
        ISFP: {
            title: "ISFP - 随马而安",
            desc: "你对细节和美感有天然直觉，无论是代码、笔记还是展示，你的作品里都带着个人风格，你的存在让理性世界多了一些温度与质感。"
        },
        INFP: {
            title: "INFP - 思马迁",
            desc: "你的表达真诚而有深度，你习惯从更大的意义出发思考问题，看重“值不值得”，愿意为了那些喜欢的东西、认同的主题投入情感与时间。"
        },
        INTP: {
            title: "INTP - 天马行空",
            desc: "你对新概念、新理论充满好奇，喜欢不断追问刨根问底。你的思路开放而跳跃，总能在不同领域间建立连接，构建起一张长期生长的认知网络。"
        },
        ESTP: {
            title: "ESTP - 无所畏驹",
            desc: "你在临场和高压环境下反而状态拉满，敢试、敢改、反应快。你相信实践出真知，很多成果正是在临场发挥中诞生，你的能量感总能带动起整个团队。"
        },
        ESFP: {
            title: "ESFP - 杀马特",
            desc: "你自带活跃气场，善于带热氛围，把复杂内容讲得生动有趣。你对反馈非常敏感，总能让合作过程更轻松。自信放光，你的存在就是一剂提振士气的良药。"
        },
        ENFP: {
            title: "ENFP - 马卡巴卡",
            desc: "你脑洞多、灵感快，擅长从不同领域中捕捉创意，总能看到别人没注意到的可能性，提出让人眼前一亮的想法。你的发散思维和新颖视角会不断打开新的可能性。"
        },
        ENTP: {
            title: "ENTP - 辩马温",
            desc: "你享受观点碰撞的过程，敢于辩论挑战既有理论。你的思维敏捷、表达直接，常常推动讨论走向更深层。对你来说，思考本身就是一种乐趣。"
        },
        ESTJ: {
            title: "ESTJ - 马当劳",
            desc: "你擅长统筹资源、推进进度，让事情真正落地。你目标清晰、执行力强，是团队中的稳定锚点。在你的带领和推进下，没有计划会只停留在纸面。"
        },
        ESFJ: {
            title: "ESFJ - 治愈嗨马",
            desc: "你对他人的状态非常敏感，很会照顾别人、接住情绪。你重视关系，擅长沟通协调，也愿意为集体多付出一些，让合作变成了一件“有人情味”的事。"
        },
        ENFJ: {
            title: "ENFJ - 伯乐相马",
            desc: "你擅长看见别人的优点，鼓励他人，常常成为团队的精神支点。真诚的你喜欢处于集体之中，相信共同进步，也无比乐于记录和分享过程。"
        },
        ENTJ: {
            title: "ENTJ - 掌握大驹",
            desc: "你擅长从长期视角规划路径，把目标拆解为可执行的阶段。你对于成长高度自觉、行动果断、方向感极强，你的人生像是一张不断更新着的战略图纸。"
        }
    }
};


// ==============================
// 3. 状态管理
// ==============================
let currentIdx = 0;
let userAnswers = [];
let archScores = {};
let mbtiScores = {};
let userNickname = '';


// ==============================
// 4. 主流程逻辑
// ==============================
function startQuiz() {
    document.getElementById('page-home').classList.remove('active');
    document.getElementById('page-quiz').classList.add('active');
    showQuestion(0);
}

// BGM：在首页第一次交互时播放
(() => {
    const bgm = document.getElementById('bgm');
    const home = document.getElementById('page-home');
    if (!bgm || !home) return;
    bgm.volume = 0.5;
    const tryPlay = () => {
        bgm.play().catch(() => {
            // 浏览器可能拦截自动播放，用户再次点击即可
        });
    };
    home.addEventListener('click', tryPlay, { once: true });
    home.addEventListener('touchstart', tryPlay, { once: true });
})();

function showQuestion(index) {
    currentIdx = index;
    const q = questions[index];

    // 进度条
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').innerText = `${index + 1}/${questions.length}`;

    // 题干
    document.getElementById('question-title').innerText = q.title;

    // 选项
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

    // 上一题按钮
    const btnPrev = document.getElementById('btn-prev');
    if (btnPrev) {
        btnPrev.style.display = index > 0 ? 'block' : 'none';
    }
    const quizFooter = document.querySelector('.quiz-footer');
    if (quizFooter) {
        if (index > 0) {
            quizFooter.classList.add('has-prev');
        } else {
            quizFooter.classList.remove('has-prev');
        }
    }

    // 多选题“下一题”按钮
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
    btnNext.disabled = !Array.isArray(selected) || selected.length === 0;
}

function nextFromMulti() {
    const q = questions[currentIdx];
    if (q && q.multi) {
        const selected = userAnswers[currentIdx];
        if (!Array.isArray(selected) || selected.length === 0) return;
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
        Object.keys(mbti).forEach(k => {
            mbtiScores[k] = (mbtiScores[k] || 0) + mbti[k];
        });
        Object.keys(arch).forEach(k => {
            archScores[k] = (archScores[k] || 0) + arch[k];
        });
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

    const text = `我的 2026 码农马型人格是：【${horse}】🐴
本轮匹配的大模型风格是：${llm}
新年寄语：${wish}
——「复旦 AI 马年小测试」`;

    navigator.clipboard.writeText(text).then(() => {
        alert('结果已复制到剪贴板，可以去和朋友们分享啦！');
    }).catch(() => {
        alert('自动复制失败，请手动截图或复制分享～');
    });
}

function restartQuiz() {
    // 重置状态
    currentIdx = 0;
    userAnswers = [];
    archScores = {};
    mbtiScores = {};
    userNickname = '';

    // 回到首页
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('page-home').classList.add('active');

    // 重置进度条
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    if (progressBar) progressBar.style.width = '0%';
    if (progressText) progressText.innerText = `1/${questions.length}`;
}

// 昵称页事件绑定
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
