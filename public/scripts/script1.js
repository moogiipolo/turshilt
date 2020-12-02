setTimeout(function ()
{
	dp.init(
	{
		containerID: "screen",
		gridX: 6,
		gridY: 4,
		imagesPath: "images/",
		timeout: 153,
		flash: { r: 255, g: 255, b: 255},
		fadein:
		{
			alpha: 100,
			alphaTarget: 0,
			step: -5,
			endFlash: 80,
			nextCell: 90,
			nextStep: 0,
		},
		fadeout:
		{
			alpha: 0,
			alphaTarget: 60,
			step: 5,
			endFlash: 20,
			nextCell: 10,
			nextStep: 40,
		},
		menu: [
			{
				html: '1',
				target: 0
			},
			{
				html: '2',
				target: 1,
				submenu: {
					title: '2',
					lines: [
						{
							html: 'Computer',
							text: [{
								html: '',
								x: 0, y: 2, w: 5, h: 1
							},
							{
								id: "thumb1",
								x: 1, y: 0, w: 2, h: 2
							}]
						},
						{
							html: 'Monitor',
							text: [{
								html: ' ',
								x: 4, y: 0, w: 1, h: 4
							},
							{
								id: "thumb2",
								x: 0, y: 2, w: 5, h: 1
							}]
						},
						{
							html: 'Laptop',
							text: [{
								html: ' ',
								x: 2, y: 0, w: 1, h: 4
							},
							{
								html: 'Laptop ',
								x: 4, y: 0, w: 1, h: 4
							},
							{
								id: "thumb3",
								x: 2, y: 1, w: 3, h: 2
							}]
						},
						{
							html: 'Dagaldah heregsel',
							fullImage: "eve06.jpg"
						}
					]
				}
			},
			{
				html: '3',
				target: 2
			},
			{
				html: '4',
				target: 3
			}
		],
		page: [
		{
			backgroundImage: "elite01.jpg",
			menuBackgroundColor: { r: 0, g: 100, b: 160 },
			text: [
				/*{
					html: ' ',
					x: 0, y: 2, w: 2, h: 2
				},*/
				{
					id: "txt1",
					x: 3, y: 2, w: 3, h: 1
				},
				{
					html: '<h1>Net</h1>',
					x: 4, y: 3, w: 0.5, h: 1
				}
			],
			menuTarget: [
				{ x: 0, y: 0 },
				{ x: 5, y: 1 },
				{ x: 0, y: 3 },
				{ x: 5, y: 3 }
			]
		},
		{ 
			backgroundImage: "eve02.jpg",
			menuBackgroundColor: { r: 102, g: 102, b: 51 },
			text: [{
					html: ' ',
					x: 5, y: 3, w: 1, h: 1
				},
				{
					html: ' ',
					x: 0, y: 3, w: 1, h: 1
				},
				{
					id: "txt2",
					x: 0, y: 0, w: 3, h: 2
				},
				{
					html: '<a class="computer" href="computer/index.html" title="хvсэн computer-аа захиал"><h1>Computer</h1></a>',
					x: 4, y: 0, w: 2, h: 1
				}
			],
			menuTarget: [
				{ x: 3, y: 0 },
				{ x: 1, y: 3 },
				{ x: 3, y: 3 },
				{ x: 5, y: 2 }
			]
		},
		{
			backgroundImage: "eve03.jpg",
			menuBackgroundColor: { r: 160, g: 100, b: 0 },
			text: [{
					html: ' ',
					x: 0, y: 0, w: 1, h: 1
				},
				{
					html: ' ',
					x: 5, y: 0, w: 1, h: 1
				},
				{
					id: "txt3",
					x: 2, y: 1, w: 3, h: 2
				},
				{
					html: '<a class="art" href="art/index.html" title="Дэндvv сайхан бvтээл"><h1>ART</h1></a>',
					x: 5, y: 2, w: 1, h: 1
				}
			],
			menuTarget: [
				{ x: 1, y: 0 },
				{ x: 1, y: 3 },
				{ x: 5, y: 3 },
				{ x: 5, y: 1 }
			]
		},
		{
			backgroundImage: "eve04.jpg",
			menuBackgroundColor: { r: 0, g: 150, b: 150 },
			text: [{
					id: "txt41",
					x: 0, y: 2, w: 2, h: 2
				},
				{
					id: "txt4",
					x: 4, y: 2, w: 2, h: 2
				},
				{
					html: '<a class="zurhai" href="zurhai/index.html" title="хааана ч байхг?й зурхай"><h1>Зурхай</h1></a>',
					x: 3, y: 3, w: 1, h: 1
				}
			],
			menuTarget: [
				{ x: 2, y: 0 },
				{ x: 1, y: 0 },
				{ x: 2, y: 3 },
				{ x: 5, y: 0 }
			]
		}]
	});
}, 500);