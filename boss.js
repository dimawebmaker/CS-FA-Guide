module.exports = {
	// 进入副本提示文
	DungeonInfo : [
		{zone: 3026, string: 'Bienvenido <font color="#56B4E9">Логово Келсайка</font> <font color="#E69F00">Нормал</font>'},
		{zone: 3126, string: 'Bienvenido <font color="#56B4E9">Логово Келсайка</font> <font color="#00FFFF">Сложно</font>'},
		{zone: 3027, string: 'Bienvenido <font color="#56B4E9">Арена Безумия</font>'}
	],
	// 凯尔赛克隐藏地(Corrupted Skynest)
	CK_BOSS : [
		// 120 猛烈的咆哮
		// 162 猛烈的咆哮
		// 106 前方-驴打滚
		// 156 前方-驴打滚
		// 205 前方跳跃(回避)
		// 206 后方跳跃(闪避)
		// 131 广域1实例
		{id: 103, msg: 'Атака хвостом'},
		{id: 153, msg: 'Атака хвостом'},
		{id: 108, msg: 'Правый поворот (нокдаун !!)'},
		{id: 158, msg: 'Правый поворот (нокдаун !!)'},
		{id: 109, msg: 'Поверните налево (нокдаун!)'},
		{id: 159, msg: 'Поверните налево (нокдаун!)'},
		{id: 118, msg: '~ Летающий Кот ~'},
		{id: 160, msg: '~ Летающий Кот ~'},
		{id: 137, msg: '[Yamamamamam] Кельсик в Форталес'},
		{id: 138, msg: 'Широкая атака Уйди 50м !!'},
		{id: 110, msg: 'Огонь на полу (держись подальше)'},
		{id: 112, msg: 'Лед на полу (держись подальше)'},
		{id: 114, msg: 'Огонь горит вперёд (держись подальше)'},
		{id: 139, msg: '[Температура] 60% всего (Лед)'},
		{id: 140, msg: '[Температура] 40% всех (огонь)'},
		// 164 [温度] 100° 全灭
		// 165 [温度] 0° 全灭
		// 切换DeBuff
		// 101 右脚(火_闪避)
		// 151 右脚(火_闪避)
		// 102 左脚(冰_格挡)
		// 152 左脚(冰_格挡)
		// 107 双脚_快
		// 157 双脚_快
		{id: 145, msg: 'Медленная атака (оглушение)'},
		{id: 104, msg: 'AOE-магия льда (большая)'},
		{id: 154, msg: 'АОЕ-Магия льда (маленькая)'},
		{id: 105, msg: 'АОЕ-Магия Огня (Большая)'},
		{id: 155, msg: 'AOE-Магия Огня (маленькая)'},
		// 内外鉴定
		{id: 212, msg: 'Красный внутри '}, // 212 -> 141
		{id: 213, msg: 'Синий внутри '}, // 213 -> 143
		{id: 214, msg: 'Синий внутри '}, // 214 -> 142
		{id: 215, msg: 'Красный внутри '}, // 215 -> 144
	// 以下未知
		{id: 119, msg: 'Слабый рев'},
		{id: 161, msg: 'Слабый рев'},
		{id: 124, msg: 'Слабая высота'},
		{id: 163, msg: 'Слабая высота'},
		
		{id: 116, msg: '(Дыхание Огня) Беги'},// "(화염브레스용)액티브무브_Run_노멀"
		{id: 117, msg: 'Ледяное дыхание'},// "화염브레스_breath_노멀"
		
		{id: 121, msg: 'Воскресенское проклятие'},// "부활저주_SpwanNpc_노멀"
		{id: 122, msg: 'Вызов тварей'},// "부하소환_reactionAtk_노멀"
		{id: 123, msg: 'Заклинание Ожидание-Магический Бафф'},// "자기버프_Wait_노멀"
		
		{id: 125, msg: 'Запрещено атаковать близко'},// "근거리금지_발동_SpawnNpc_노멀"
		{id: 126, msg: 'Запрещено атаковать издалека'},// "원거리금지_발동_SpawnNpc_노멀"
		{id: 127, msg: 'Запрещено лечить'},// "회복금지_발동_SpawnNpc_노멀"
		{id: 128, msg: 'Завершено закрытие атаки'},// "근거리금지_종료_SpawnNpc_노멀"
		{id: 129, msg: 'Запрет атаки завершен'},// "원거리금지_종료_SpawnNpc_노멀"
		{id: 130, msg: 'Запрет на исцеление закончился'},// "회복금지_종료_SpawnNpc_노멀"
		
		{id: 132, msg: 'Сдвиг голов (475)'},// "오브젝트소환(475)_aggrochange_노말"
		{id: 133, msg: 'Смена цели (3026)'},// "오브젝트소환(3026)_aggrochange_노말"
		{id: 134, msg: 'Широкая площадь раба'},// "광역1인노예_aggrochange_노말"
		
		{id: 135, msg: '[Бежит] Громкий рев Келсаика'},// "[폭주]켈사이크_강한포효_Roar_노멀"
		{id: 136, msg: '[Беги] Келсайк кольцо действия'},// "[폭주]켈사이크_루프동작_노멀"
		
		{id: 150, msg: 'Двигайся беги'},// "액티브무브_Run_노멀"
		{id: 201, msg: 'храп'},// "헉헉동작_Groggy_노멀"
		{id: 204, msg: 'Замена-Смена цели'},// "어그로체인지_aggrochange_노멀"
		{id: 209, msg: 'Режим будильника'},// "모드알람_ModeAlarm_더미"
		{id: 210, msg: 'Действие призыва'},// "스폰동작_Spawn_노멀"
		{id: 211, msg: 'Конец вращения'},// "회전종료용_ModeAlarm_노멀"
		{id: 302, msg: 'Случайный Бафф Непобедимый'}// "무적버프_wait_노멀"
	],
	//            0     1
	CK_TipMsg : ["(Войти)", "(Убирайся)"],
	// Mad Ness Arena()
	KQ_BOSS : [
		{id: 108, msg: 'Передний Меч (Медленный)'},    // 101 121 122 連續攻擊 -> 108 One size兩斷(坦)
		{id: 355, msg: 'Jawbreaker (передовой удар)'},    // 102 121 103 連續攻擊 -> 355 右手蓄力 -> 114 下巴粉碎
		{id: 135, msg: 'Передний Меч (Медленный)'},    //         104 連續攻擊 -> 135 左手蓄力 -> 130 One size兩斷
		{id: 111, msg: 'Оглушение - передний меч'}, //         104 連續攻擊 -> 111 刀背打擊 -> 130 One size兩斷
		{id: 112, msg: 'Прыжок за мечом'}, //     121 102 連續攻擊 -> 112 後退踢擊 -> 130 One size兩斷
		{id: 109, msg: 'Прыжок вперед - Меч'},         // 109 向下劈擊 -> 402 等待     -> 130 One size兩斷
		
		{id: 116, msg: 'Идеальный блок (уворот)'},    // 116 斬擊
		{id: 140, msg: 'Идеальный блок (уворот)'},    // 140 斬擊
		
		{id: 145, msg: 'бублик'},  // 145 重擊斬 139 迴旋砍擊x2 -> 140 斬擊
		{id: 136, msg: 'колос'},  // 136 重擊斬 144 迴旋砍擊x1 -> 130 One size兩斷
		
		{id: 141, msg: 'Круговая атака - передний меч'}, // 141 破壞氣魄+迴旋砍擊x2 -> 146 114 130
		{id: 146, msg: 'Передняя атака подбородка - передний удар'}, // 146 One size兩斷       -> 114 下巴粉碎 -> 130 One size兩斷
		{id: 142, msg: 'Твист Атака - Атака подбородком'}, // 142 破壞氣魄+迴旋砍擊x2 -> 143 114 130
		{id: 143, msg: 'Передняя часть'},        // 143 One size兩斷(取消) -> 114 下巴粉碎 -> 130 One size兩斷
		
		{id: 151, msg: '3 вспышки - фронтальная атака'}, // 151 149 148三斬 -> 130 One size兩斷
		{id: 117, msg: 'Вспышка (Уворот)'},  //    117 瞬閃点名 -> 130 One size兩斷
		{id: 356, msg: 'Вспышка (Уворот)'},  //    356 瞬閃点名 -> 147 One size兩斷
		{id: 134, msg: 'Осторожно (обратная атака)'},  //    134 要害攻擊 -> 147 One size兩斷
		
		{id: 357, msg: 'Фиолетовый-> Взрыв (Выход !!)'}, // 357 吸收力量 -> 110 起身攻擊 -> 氣斬
		{id: 350, msg: 'Красные-> Пончики'},     // 350 吸收力量                 -> 302 甜甜圈
		
		{id: 351, msg: 'Сломать щит!'},       // 护盾开始 环形爆发
		{id: 401, msg: '30% (уклонение)'}           // 开始
		
		// 105 連續攻擊
		// 106 迴旋砍擊x2
		// 107 憤怒一擊 / 神經劈擊
		// 113 ???
		// 115 瞬閃
		// 118 氣斬
		// 119 瞬閃 + 起身攻擊
		// 120 (右手蓄力)
		// 123 連續攻擊
		// 126 迴旋砍擊x4
		// 127 執念
		// 128 下巴粉碎
		// 129 (右手蓄力)
		// 131 重擊斬 + 迴旋砍擊x2
		// 132 ??? + One size兩斷
		// 133 瞬閃 + 氣斬
		// 137 One size兩斷
		// 138 疾走
		// 150 跑步
		// 352 护盾[不使用]
		// 353 前跳[不使用]
		// 354 护盾破碎[不使用]
		// 360 吸收力量2
		// 361 吸收力量3
	],
	KQ_TipMsg : ["Зарядка навыка завершена (Осторожно) !!"]
}