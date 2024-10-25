const app = Vue.createApp({
    data() {
        return {
            darkMode: false,
            selectedTeam: 'Arizona Cardinals', // Default team
            selectedPosition: '', // Default to all positions
            offenseView: true, // Toggle between offense and defense
            teams: [
                // Full team names
                'Arizona Cardinals', 
                'Atlanta Falcons', 
                'Baltimore Ravens', 
                'Buffalo Bills', 
                'Carolina Panthers', 
                'Chicago Bears'
                // .... Add every other team here
            ],
            offensePositions: [
                '',            // Empty for "All Positions"
                'QB',          // Quarterback
                'RB',          // Running Back
                'LWR',         // Left Wide Receiver
                'RWR',         // Right Wide Receiver
                'SWR',         // Slot Wide Receiver
                'TE'           // Tight End
            ],
            defensePositions: [
                '',            // Empty for "All Positions"
                'K',           // Kicker
                'LB',          // Linebacker
                'CB',          // Cornerback
                'S',           // Safety (general)
                'DE',          // Defensive End
                'DT'           // Defensive Tackle
            ],
            playersData: {
                'Arizona Cardinals': {
                    offense: {
                        QB: ['Kyler Murray', 'Clayton Tune'],
                        RB: ['James Conner', 'Emari Demercado', 'Trey Benson', 'DeeJay Dallas'],
                        LWR: ['Marvin Harrison Jr.', 'Zay Jones'],
                        RWR: ['Michael Wilson', 'Zach Pascal', 'Auden Tate'],
                        SWR: ['Greg Dortch', 'Xavier Weaver'],
                        TE: ['Trey McBride', 'Elijah Higgins', 'Tip Reiman']
                    },
                    defense: {
                        K: ['Chad Ryland'],
                        LB: ['Zaven Collins', 'Mack Wilson', 'Dennis Gardeck', 'Kyzir White', 'Owen Pappoe'],
                        CB: ['Starling Thomas V', 'Sean Murphy-Bunting', 'Kei\'Trel Clark'],
                        S: ['Jalen Thompson', 'Budda Baker', 'Dadrion Taylor-Demerson'],
                        DE: ['Dante Stills', 'L.J. Collier', 'Jonathan Ledbetter', 'BJ Ojulari'],
                        DT: ['Roy Lopez', 'Dante Stills', 'Bilal Nichols']
                    }
                },
                'Atlanta Falcons': {
                    offense: {
                        QB: ['Kirk Cousins', 'Michael Penix Jr.'],
                        RB: ['Bijan Robinson', 'Tyler Allgeier'],
                        LWR: ['Drake London', 'Casey Washington'],
                        RWR: ['Darnell Mooney', 'KhaDarel Hodge'],
                        SWR: ['Ray-Ray McCloud'],
                        TE: ['Kyle Pitts', 'Charlie Woerner', 'Ross Dwelley']
                    },
                    defense: {
                        K: ['Younghoe Koo'],
                        LB: ['Matthew Judon', 'James Smith-Williams', 'Kaden Elliss', 'Troy Andersen'],
                        CB: ['Mike Hughes', 'A.J. Terrell', 'Dee Alford'],
                        S: ['Jessie Bates', 'Justin Simmons', 'Richie Grant'],
                        DE: ['Grady Jarrett', 'David Onyemata', 'Zach Harrison'],
                        DT: ['David Onyemata', 'Ruke Orhorhoro']
                    }
                },
                'Baltimore Ravens': {
                    offense: {
                        QB: ['Lamar Jackson', 'Josh Johnson', 'Devin Leary'],
                        RB: ['Derrick Henry', 'Justice Hill', 'Rasheen Ali'],
                        LWR: ['Zay Flowers', 'Tylan Wallace', 'Keith Kirkwood'],
                        RWR: ['Rashod Bateman', 'Devontez Walker'],
                        SWR: ['Nelson Agholor', 'Deonte Harty', 'Keith Kirkwood'],
                        TE: ['Mark Andrews', 'Isaiah Likely', 'Charlie Kolar']
                    },
                    defense: {
                        K: ['Justin Tucker'],
                        LB: ['Roquan Smith', 'Odafe Oweh', 'Trenton Simpson'],
                        CB: ['Marlon Humphrey', 'Nate Wiggins', 'Eddie Jackson'],
                        S: ['Marcus Williams', 'Kyle Hamilton', 'Ar\'Darius Washington'],
                        DE: ['Justin Madubuike', 'Travis Jones', 'Broderick Washington'],
                        DT: ['Michael Pierce', 'Travis Jones']
                    }
                },
                'Buffalo Bills': {
                    offense: {
                        QB: ['Josh Allen', 'Mitchell Trubisky'],
                        RB: ['James Cook', 'Ray Davis', 'Ty Johnson'],
                        LWR: ['Amari Cooper', 'Mack Hollins'],
                        RWR: ['Keon Coleman', 'Curtis Samuel', 'Mack Hollins'],
                        SWR: ['Khalil Shakir'],
                        TE: ['Dalton Kincaid', 'Dawson Knox', 'Quintin Morris']
                    },
                    defense: {
                        K: ['Tyler Bass'],
                        LB: ['Terrel Bernard', 'Casey Toohill', 'Dorian Williams'],
                        CB: ['Rasul Douglas', 'Christian Benford', 'Ja\'Marcus Ingram'],
                        S: ['Damar Hamlin', 'Taylor Rapp', 'Lewis Cine'],
                        DE: ['Austin Johnson', 'A.J. Epenesa', 'Gregory Rousseau'],
                        DT: ['DaQuan Jones', 'Ed Oliver', 'Austin Johnson']
                    }
                },
                'Carolina Panthers': {
                    offense: {
                        QB: ['Andy Dalton', 'Bryce Young'],
                        RB: ['Chuba Hubbard', 'Miles Sanders', 'Raheem Blackshear'],
                        LWR: ['Diontae Johnson', 'David Moore', 'Mike Strachan'],
                        RWR: ['Jonathan Mingo', 'Adam Thielen'],
                        SWR: ['Xavier Legette', 'David Moore'],
                        TE: ['Tommy Tremble', 'Ja\'Tavion Sanders', 'Ian Thomas']
                    },
                    defense: {
                        K: ['Eddy Pineiro'],
                        LB: ['Josey Jewell', 'Jadeveon Clowney', 'Claudin Cherelus'],
                        CB: ['Jaycee Horn', 'Michael Jackson', 'Dane Jackson'],
                        S: ['Nick Scott', 'Xavier Woods', 'Sam Franklin'],
                        DE: ['A\'Shawn Robinson', 'Charles Harris', 'LaBryan Ray'],
                        DT: ['Derrick Brown', 'Nick Thurman']
                    }
                },
                'Chicago Bears': {
                    offense: {
                        QB: ['Caleb Williams', 'Tyson Bagent'],
                        RB: ['D\'Andre Swift', 'Roschon Johnson', 'Khalil Herbert'],
                        LWR: ['D.J. Moore', 'Velus Jones'],
                        RWR: ['Rome Odunze', 'Tyler Scott'],
                        SWR: ['Keenan Allen', 'DeAndre Carter'],
                        TE: ['Cole Kmet', 'Gerald Everett', 'Teagan Quitoriano']
                    },
                    defense: {
                        K: ['Cairo Santos'],
                        LB: ['Darrell Taylor', 'T.J. Edwards', 'Tremaine Edmunds'],
                        CB: ['Tyrique Stevenson', 'Jaylon Johnson'],
                        S: ['Jaquan Brisker', 'Kevin Byard', 'Jonathan Owens'],
                        DE: ['DeMarcus Walker', 'Montez Sweat', 'Zacch Pickens'],
                        DT: ['Gervon Dexter', 'Andrew Billings', 'Zacch Pickens']
                    }
                },
                // .... Add every other team following the same structure
            },
            sortedOrder: {} // Keep track of sorting order for each position
        };
    },
    computed: {
        filteredOffensePlayers() {
            return this.filterPlayers('offense');
        },
        filteredDefensePlayers() {
            return this.filterPlayers('defense');
        },
        // Dynamically show positions based on offense or defense view
        availablePositions() {
            return this.offenseView ? this.offensePositions : this.defensePositions;
        },
        // Dynamically generate the logo path based on the selected team
        teamLogo() {
            const teamSlug = this.selectedTeam.split(' ').pop().toLowerCase();
            return `./${teamSlug}.svg`; // Assumes images are named e.g. cardinals.svg
        }
    },
    methods: {
        toggleDarkMode() {
            if (this.darkMode) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        },
        toggleOffenseDefense() {
            this.offenseView = !this.offenseView;
            this.selectedPosition = ''; // Reset the selected position when toggling between views
        },
        filterPlayers(type) {
            const players = this.playersData[this.selectedTeam][type];
            if (this.selectedPosition) {
                return { [this.selectedPosition]: players[this.selectedPosition] };
            }
            return players;
        },
        sortPlayers(type, position, order) {
            this.sortedOrder[position] = order;
            const players = this.playersData[this.selectedTeam][type][position];
            if (order === 'asc') {
                players.sort();
            } else {
                players.sort().reverse();
            }
        }
    }
});

// Mount the Vue app
app.mount('#app');
