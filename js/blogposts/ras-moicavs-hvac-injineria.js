export const meta = {
	id: '2',
	slug: 'rasMoicavsHvacInjineria',
	image: '../../images/blogposts/ras-moicavs-hvac-injineria.webp',
	ka: {
		title: 'რას მოიცავს HVAC ინჟინერია ?',
		subtitle: 'HVAC სისტემების კლასიფიკაცია მათი დანიშნულების მიხედვით',
		excerpt:
			'ამ ბლოგში გაეცნობით HVAC სისტემების თითქმის ყველა ტიპს და მართვის სტრუქტურას, მათ დანიშნულებას და გამოყენების სფეროებს.',
	},
	en: {
		title: 'What does HVAC engineering involve?',
		subtitle: 'Classification of HVAC systems by their purpose',
		excerpt:
			'In this blog, you will learn about almost all types of HVAC systems and their control structures, their purposes, and areas of application.',
	},
}

export function content(lang) {
	if (lang === 'ka') {
		return `
<h2>🏠 Residential (საცხოვრებელი - ბინა / სახლი)</h2>

<p><strong>➡️ გამოიყენება:</strong></p>

<p><strong>Split - სპლიტ სისტემა (On/Off &amp; Inverter)</strong></p>
<p>
	კონდიცირების ყველაზე გავრცელებული ტიპი, რომელიც შედგება ერთი შიდა და ერთი
	გარე ბლოკისგან.<br />
	მუშაობის პრინციპი: მაცივარაგენტის ცირკულაციით ხდება ჰაერის გაგრილება ან
	გათბობა.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>შიდა ბლოკი (Indoor Unit)</li>
	<li>გარე ბლოკი (Outdoor Unit)</li>
	<li>მაკავშირებელი კაბელი + კვების წყარო</li>
	<li>სპილენძის მილები</li>
</ul>

<p><strong>Multi Split - მულტი სპლიტ სისტემა</strong></p>
<p>
	კონდიცირების სისტემა, სადაც ერთი გარე ბლოკი რამდენიმე შიდა ბლოკს ემსახურება.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>2-5 შიდა ბლოკი (Indoor Unit)</li>
	<li>1 გარე ბლოკი (Outdoor Unit)</li>
	<li>მაკავშირებელი კაბელი + კვების წყარო, მართვის სისტემა</li>
	<li>
		განშტოებული სპილენძის მილები (გარე ბლოკიდან თითოეულ შიდა ბლოკამდე მიდის
		ინდივიდუალური მილების წყვილი)
	</li>
</ul>

<p><strong>Mini VRF - მინი VRF სისტემა</strong></p>
<p>ეს არის VRF / VRV სისტემის შემცირებული ვერსია.</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>4-8 შიდა ბლოკი (Indoor Unit)</li>
	<li>1 ჭკვიანი გარე ბლოკი (Outdoor Unit)</li>
	<li>ჭკვიანი მართვის სისტემა</li>
	<li>
		ცენტრალური მაგისტრალი და განშტოებები (Refnet / Y-Joint) - ეს ზოგავს
		მილების რაოდენობას დიდ მანძილებზე
	</li>
</ul>

<h2>🏢 Commercial (კომერციული შენობები - ოფისი / მაღაზია / სასტუმრო / მოლი)</h2>

<p><strong>➡️ გამოიყენება:</strong></p>

<p><strong>VRF / VRV - ცვალებადი მაცივარაგენტის ნაკადის სისტემა</strong></p>
<ul>
	<li>
		<strong>VRF (Variable Refrigerant Flow)</strong> - ზოგადი ტექნოლოგიის
		სახელია
	</li>
	<li>
		<strong>VRV (Variable Refrigerant Volume)</strong> - იგივე ტექნოლოგია,
		Daikin-ის დაპატენტებული სავაჭრო ტერმინი
	</li>
</ul>
<p>
	სისტემა საშუალებას აძლევს ერთ გარე ბლოკს ემსახუროს მრავალი შიდა ბლოკი.
	იდეალურია კომერციული შენობებისთვის ინდივიდუალური კონტროლისა და
	ენერგოეფექტურობისთვის.
	<br />
	<em>"Heat Recovery" (სითბოს აღდგენის) ფუნქცია</em> - 3-მილიანი სისტემები,
	რომლებსაც შეუძლიათ ერთ ოთახი გააგრილოს, ხოლო მეორე გაათბოს ერთდროულად.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Outdoor Unit (გარე ბლოკი - ინვერტორული)</li>
	<li>Indoor Units (შიდა ბლოკები: კედლის, კასეტური, არხული)</li>
	<li>
		Copper Pipes (სპილენძის მილები) + Refnet Joints / Y-Joint
		(გამანაწილებლები)
	</li>
	<li>Communication Cable (მართვის კაბელი)</li>
	<li>Central Controller (ცენტრალური მართვის პულტი)</li>
</ul>

<p><strong>Rooftop Units - RTU (სახურავის მონობლოკი)</strong></p>
<p>
	Packaged (ერთიანი) ტიპის დანადგარი, რომელიც მონტაჟდება სახურავზე. ჰაერს
	ამუშავებს და არხების (Ducts) საშუალებით აწვდის დიდ სივრცეებს.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Monoblock Casing (ერთიანი კორპუსი)</li>
	<li>Compressor &amp; Coils (კომპრესორი და თბომცვლელები ერთად)</li>
	<li>Supply &amp; Return Fans (მიმწოდებელი და შემწოვი ვენტილატორები)</li>
	<li>Economizer (ეკონომაიზერი - გარე ჰაერის დამშლელი)</li>
</ul>

<p><strong>Packaged Units (კომპაქტური / პაკეტური აგრეგატები)</strong></p>
<p>
	RTU-ს მსგავსი სისტემა, სადაც ყველა კომპონენტი ერთ „ყუთშია“. შეიძლება
	დამონტაჟდეს მიწაზეც. გამოიყენება მცირე კომერციულ ფართებში.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Self-contained Unit (ყველაფერი ერთ ბლოკში)</li>
	<li>Thermostat (მართვის თერმოსტატი ოთახში)</li>
	<li>Ductwork (ჰაერსადინრები)</li>
</ul>

<p><strong>Chiller + FCU (ჩილერი და ფანკოილი)</strong></p>
<p>
	წყლის სისტემა (Hydronic System). Chiller აცივებს/აცხელებს წყალს, რომელიც
	მილებით მიეწოდება ოთახებში არსებულ ფანკოილებს (FCU). თანამედროვე ჩილერების
	უმეტესობა Heat Pump (შექცევადი) ტიპისაა (4-pipe system).
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Chiller (წყლის გასაცივებელი დანადგარი)</li>
	<li>Hydronic Module (ჰიდრავლიკური მოდული: ტუმბოები, ავზები)</li>
	<li>Fan Coil Units - FCU (ფანკოილები: შიდა ბლოკები)</li>
	<li>Piping System (წყლის მილები და იზოლაცია)</li>
</ul>

<p><strong>AHU + FCU (ჰაერის დამუშავების აგრეგატი და ფანკოილი)</strong></p>
<p>
	კომბინირებული სისტემა. AHU აწვდის სუფთა ჰაერს ცენტრალურად, ხოლო FCU
	არეგულირებს ტემპერატურას ოთახში. ასევე გამოიყენება VAV სისტემა ზონალური
	რეგულირებისთვის.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Air Handling Unit - AHU (ჰაერის დამუშავების აგრეგატი)</li>
	<li>Ducts &amp; Diffusers (არხები და ჰაერის გამანაწილებლები)</li>
	<li>Fan Coils (ფანკოილები)</li>
	<li>VAV Boxes (Variable Air Volume - ცვალებადი ჰაერის მოცულობის ყუთები)</li>
	<li>Chiller / Boiler (ენერგიის წყარო)</li>
</ul>

<p><strong>DOAS (გარე ჰაერის დამუშავების სისტემა)</strong></p>
<p>
	Dedicated Outdoor Air System. სისტემა, რომელიც 100% გარე ჰაერს იღებს, აშრობს
	(Dehumidification), აგრილებს და აწვდის შენობას.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>DOAS Unit (სპეც. აგრეგატი ტენის მოცილებით)</li>
	<li>Energy Recovery Wheel (ენერგიის აღდგენის თბომცვლელი / რეკუპერატორი)</li>
	<li>Ventilation Ducts (ვენტილაციის არხები)</li>
</ul>

<h2>🏭 Industrial (ინდუსტრიული ობიექტები - ქარხანა / საწყობი / დატა ცენტრი)</h2>

<p><strong>➡️ გამოიყენება:</strong></p>

<p><strong>Chillers - Air / Water Cooled (ჰაერით და წყლით გაგრილებადი)</strong></p>
<p>გამოიყენება დანადგარების გასაგრილებლად (Process Cooling).</p>
<ul>
	<li>
		<strong>Air Cooled Chiller</strong> - კონდენსაცია ხდება გარემო ჰაერით.
	</li>
	<li>
		<strong>Water Cooled Chiller</strong> - კონდენსაცია ხდება წყლით (Cooling
		Tower).
	</li>
	<li>
		<strong>Free Cooling</strong> - დაბალი ტემპერატურისას ამცირებს კომპრესორის
		მუშაობას.
	</li>
</ul>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Industrial Chiller (სამრეწველო ჩილერი)</li>
	<li>Cooling Tower (გაგრილების კოშკურა - მხოლოდ Water Cooled-ისთვის)</li>
	<li>Process Pumps (მაღალი წნევის ტუმბოები)</li>
	<li>Buffer Tank (ბუფერული ავზი)</li>
</ul>

<p><strong>AHU - High Air Flow / Hygienic (დიდი წარმადობის და ჰიგიენური)</strong></p>
<p>
	განსაკუთრებით მძლავრი აგრეგატები. ხშირად სჭირდებათ სპეციალური ფილტრაცია
	(HEPA Filters) სტერილური გარემოსთვის.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Stainless Steel Casing (უჟანგავი კორპუსი)</li>
	<li>High Pressure Fans (მაღალი წნევის ვენტილატორები)</li>
	<li>HEPA / ULPA Filters (სპეც. ფილტრები)</li>
	<li>EC Fans (ენერგოეფექტური ვენტილატორები)</li>
	<li>Heat Recovery Section (თბოაღდგენა)</li>
	<li>Humidification System (ტენიანობის კონტროლი)</li>
</ul>

<p><strong>Industrial Ventilation Systems (სამრეწველო ვენტილაცია)</strong></p>
<p>
	ასპირაცია და გამწოვი სისტემები. მავნე ნივთიერებების, მტვრის ან ბოლის გაწოვა.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Centrifugal Fans (რადიალური / "ლოკოკინა" ვენტილატორები)</li>
	<li>Cyclones / Scrubbers (ჰაერის ფილტრაცია მინარევებისგან)</li>
	<li>MAU - Make-up Air Unit (ჰაერის კომპენსაციის აგრეგატი)</li>
	<li>Industrial Ducts (სამრეწველო არხები)</li>
</ul>

<p><strong>Precision Cooling - CRAC / CRAH (პრეცისიული კონდიცირება)</strong></p>
<p>
	გამოიყენება დატა ცენტრებში (Data Centers), ტემპერატურისა და ტენიანობის ზუსტი
	კონტროლისთვის.
</p>
<ul>
	<li><strong>CRAC:</strong> მაცივარაგენტზე მომუშავე.</li>
	<li><strong>CRAH:</strong> ჩილერის წყალზე მომუშავე.</li>
	<li>Hot Aisle / Cold Aisle Containment (ჰაერის მენეჯმენტი).</li>
	<li>Redundancy (N+1 / 2N კონფიგურაციები).</li>
</ul>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Precision Unit (ზუსტი კონდიცირების კარადა)</li>
	<li>Raised Floor (აწეული იატაკი)</li>
	<li>Humidifier / Reheater (დამატენიანებელი / გამათბობელი)</li>
</ul>

<p><strong>Refrigeration Systems (სამაცივრე სისტემები)</strong></p>
<p>
	დაბალტემპერატურული მაცივრები (Cold Storage). პროდუქციის შესანახად (-18°C,
	-25°C). გამოიყენება NH3 ან CO2 სისტემები.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Refrigeration Rack (კომპრესორების სადგური)</li>
	<li>Evaporators / Unit Coolers (შიდა ამაორთქლებლები)</li>
	<li>Insulated Panels (სენდვიჩ პანელები)</li>
</ul>

<h2>🎛️ BMS - შენობის მართვის სისტემა (Building Management System)</h2>

<p><strong>➡️ გამოიყენება:</strong></p>
<ul>
	<li>
		<strong>კომერციული:</strong> ოფისებში და სასტუმროებში კომფორტისა და
		ენერგიის სამართავად.
	</li>
	<li>
		<strong>ინდუსტრიული:</strong> საწარმოო პროცესებისთვის (ფარმაცევტული, დატა
		ცენტრები).
	</li>
</ul>

<p>
	BMS არის „შენობის ტვინი“. ცენტრალიზებულად მართავს და აკონტროლებს HVAC,
	განათებას და სხვა სისტემებს.
</p>
<p><strong>შემადგენლობა:</strong></p>
<ul>
	<li>Management Server &amp; Software (ცენტრალური სერვერი)</li>
	<li>DDC Controllers (ციფრული კონტროლერები - "პატარა ტვინები")</li>
	<li>Sensors (სენსორები - ტემპერატურა, ტენიანობა, CO2, წნევა)</li>
	<li>
		Actuators &amp; Valves (აღმსრულებელი მექანიზმები - სარქველები, დამპერები)
	</li>
	<li>User Interface / HMI (ოპერატორის გრაფიკული ინტერფეისი)</li>
</ul>
        `
	} else {
		return `
<h2>🏠 Residential (Apartment / House)</h2>

<p><strong>➡️ Used for:</strong></p>

<p><strong>Split System (On/Off &amp; Inverter)</strong></p>
<p>
	The most common type of air conditioning, consisting of one indoor and one
	outdoor unit.<br />
	Operating principle: Air is cooled or heated by the circulation of refrigerant.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Indoor Unit</li>
	<li>Outdoor Unit</li>
	<li>Connecting Cable + Power Supply</li>
	<li>Copper Pipes</li>
</ul>

<p><strong>Multi Split System</strong></p>
<p>
	An air conditioning system where one outdoor unit serves multiple indoor units.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>2-5 Indoor Units</li>
	<li>1 Outdoor Unit</li>
	<li>Connecting Cable + Power Supply, Control System</li>
	<li>
		Branched copper pipes (Individual pairs of pipes run from the outdoor unit
		to each indoor unit)
	</li>
</ul>

<p><strong>Mini VRF System</strong></p>
<p>This is a downsized version of a VRF / VRV system.</p>
<p><strong>Components:</strong></p>
<ul>
	<li>4-8 Indoor Units</li>
	<li>1 Smart Outdoor Unit</li>
	<li>Smart Control System</li>
	<li>
		Central main line and branches (Refnet / Y-Joint) - this saves pipe
		quantity over long distances
	</li>
</ul>

<h2>🏢 Commercial (Office / Shop / Hotel / Mall)</h2>

<p><strong>➡️ Used for:</strong></p>

<p><strong>VRF / VRV - Variable Refrigerant Flow System</strong></p>
<ul>
	<li>
		<strong>VRF (Variable Refrigerant Flow)</strong> - General technology name
	</li>
	<li>
		<strong>VRV (Variable Refrigerant Volume)</strong> - The same technology,
		a patented trade term by Daikin
	</li>
</ul>
<p>
	The system allows one outdoor unit to serve multiple indoor units.
	Ideal for commercial buildings for individual control and energy efficiency.
	<br />
	<em>"Heat Recovery" feature</em> - 3-pipe systems that can cool one room
	while heating another simultaneously.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Outdoor Unit (Inverter)</li>
	<li>Indoor Units (Wall-mounted, Cassette, Ducted)</li>
	<li>Copper Pipes + Refnet Joints / Y-Joint</li>
	<li>Communication Cable</li>
	<li>Central Controller</li>
</ul>

<p><strong>Rooftop Units - RTU</strong></p>
<p>
	A packaged unit mounted on the roof. It processes air and supplies it to
	large spaces through ducts.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Monoblock Casing</li>
	<li>Compressor &amp; Coils (Combined)</li>
	<li>Supply &amp; Return Fans</li>
	<li>Economizer (Outside air damper)</li>
</ul>

<p><strong>Packaged Units</strong></p>
<p>
	A system similar to an RTU, where all components are in one "box". It can
	also be installed on the ground. Used in small commercial spaces.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Self-contained Unit (All-in-one block)</li>
	<li>Thermostat (In-room control)</li>
	<li>Ductwork</li>
</ul>

<p><strong>Chiller + FCU (Fan Coil Unit)</strong></p>
<p>
	Hydronic System. The Chiller cools/heats water, which is supplied through
	pipes to the Fan Coil Units (FCU) in the rooms. Most modern chillers are
	Heat Pump (reversible) type (4-pipe system).
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Chiller (Water cooling unit)</li>
	<li>Hydronic Module (Pumps, tanks)</li>
	<li>Fan Coil Units - FCU (Indoor blocks)</li>
	<li>Piping System (Water pipes and insulation)</li>
</ul>

<p><strong>AHU + FCU (Air Handling Unit and Fan Coil)</strong></p>
<p>
	A combined system. The AHU supplies fresh air centrally, while the FCU
	regulates the temperature in the room. VAV systems are also used for zonal
	regulation.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Air Handling Unit - AHU</li>
	<li>Ducts &amp; Diffusers</li>
	<li>Fan Coils</li>
	<li>VAV Boxes (Variable Air Volume)</li>
	<li>Chiller / Boiler (Energy source)</li>
</ul>

<p><strong>DOAS (Dedicated Outdoor Air System)</strong></p>
<p>
	A system that takes in 100% outside air, dehumidifies, cools, and supplies
	it to the building.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>DOAS Unit (Special unit with moisture removal)</li>
	<li>Energy Recovery Wheel</li>
	<li>Ventilation Ducts</li>
</ul>

<h2>🏭 Industrial (Factory / Warehouse / Data Center)</h2>

<p><strong>➡️ Used for:</strong></p>

<p><strong>Chillers - Air / Water Cooled</strong></p>
<p>Used for process cooling of equipment.</p>
<ul>
	<li>
		<strong>Air Cooled Chiller</strong> - Condensation occurs via ambient air.
	</li>
	<li>
		<strong>Water Cooled Chiller</strong> - Condensation occurs via water
		(Cooling Tower).
	</li>
	<li>
		<strong>Free Cooling</strong> - Reduces compressor operation at low
		temperatures.
	</li>
</ul>
<p><strong>Components:</strong></p>
<ul>
	<li>Industrial Chiller</li>
	<li>Cooling Tower (For Water Cooled only)</li>
	<li>Process Pumps (High pressure pumps)</li>
	<li>Buffer Tank</li>
</ul>

<p><strong>AHU - High Air Flow / Hygienic</strong></p>
<p>
	Particularly powerful units. They often require special filtration (HEPA
	Filters) for a sterile environment.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Stainless Steel Casing</li>
	<li>High Pressure Fans</li>
	<li>HEPA / ULPA Filters</li>
	<li>EC Fans (Energy-efficient fans)</li>
	<li>Heat Recovery Section</li>
	<li>Humidification System (Moisture control)</li>
</ul>

<p><strong>Industrial Ventilation Systems</strong></p>
<p>
	Aspiration and exhaust systems. Extraction of harmful substances, dust, or
	smoke.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Centrifugal Fans ("Snail" fans)</li>
	<li>Cyclones / Scrubbers (Air filtration from impurities)</li>
	<li>MAU - Make-up Air Unit</li>
	<li>Industrial Ducts</li>
</ul>

<p><strong>Precision Cooling - CRAC / CRAH</strong></p>
<p>
	Used in Data Centers for precise control of temperature and humidity.
</p>
<ul>
	<li><strong>CRAC:</strong> Refrigerant-based.</li>
	<li><strong>CRAH:</strong> Chilled water-based.</li>
	<li>Hot Aisle / Cold Aisle Containment.</li>
	<li>Redundancy (N+1 / 2N configurations).</li>
</ul>
<p><strong>Components:</strong></p>
<ul>
	<li>Precision Unit (Precision cooling cabinet)</li>
	<li>Raised Floor</li>
	<li>Humidifier / Reheater</li>
</ul>

<p><strong>Refrigeration Systems</strong></p>
<p>
	Cold Storage. For storing products (-18°C, -25°C). NH3 or CO2 systems are
	used.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Refrigeration Rack (Compressor station)</li>
	<li>Evaporators / Unit Coolers (Indoor evaporators)</li>
	<li>Insulated Panels (Sandwich panels)</li>
</ul>

<h2>🎛️ BMS - Building Management System</h2>

<p><strong>➡️ Used for:</strong></p>
<ul>
	<li>
		<strong>Commercial:</strong> In offices and hotels for comfort and energy
		management.
	</li>
	<li>
		<strong>Industrial:</strong> For production processes (pharmaceutical,
		data centers).
	</li>
</ul>

<p>
	BMS is the "brain of the building". It centrally manages and controls HVAC,
	lighting, and other systems.
</p>
<p><strong>Components:</strong></p>
<ul>
	<li>Management Server &amp; Software</li>
	<li>DDC Controllers (Digital controllers - "little brains")</li>
	<li>Sensors (Temperature, humidity, CO2, pressure)</li>
	<li>Actuators &amp; Valves (Dampers, valves)</li>
	<li>User Interface / HMI (Graphic operator interface)</li>
</ul>
        `
	}
}
