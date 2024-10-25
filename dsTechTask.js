const app = Vue.createApp({
    data() {
        return {
            darkMode: false, // Boolean to control the theme mode (light/dark)
            selectedTeam: 'Arizona Cardinals', // Sets default team selection
            selectedPosition: '', // Sets default position selection; empty implies all positions
            offenseView: true, // Controls the current view, toggling between offense and defense
            teams: [
                // List of available teams; only partial list shown here
                'Arizona Cardinals', 
                'Atlanta Falcons', 
                'Baltimore Ravens', 
                'Buffalo Bills', 
                'Carolina Panthers', 
                'Chicago Bears'
                // Additional teams should be added as needed
            ],
            offensePositions: [
                '',            // Blank for selecting "All Positions"
                'QB',          // Quarterback
                'RB',          // Running Back
                'LWR',         // Left Wide Receiver
                'RWR',         // Right Wide Receiver
                'SWR',         // Slot Wide Receiver
                'TE'           // Tight End
            ],
            defensePositions: [
                '',            // Blank for selecting "All Positions"
                'K',           // Kicker
                'LB',          // Linebacker
                'CB',          // Cornerback
                'S',           // Safety
                'DE',          // Defensive End
                'DT'           // Defensive Tackle
            ],
            // Nested object containing team-specific data for players by position
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
                // Additional team structures follow the same pattern
            },
            sortedOrder: {} // Tracks the current sorting order (ascending/descending) for each position
        };
    },
    computed: {
        // Returns the filtered list of offensive players based on selected team and position
        filteredOffensePlayers() {
            return this.filterPlayers('offense');
        },
        // Returns the filtered list of defensive players based on selected team and position
        filteredDefensePlayers() {
            return this.filterPlayers('defense');
        },
        // Determines available positions based on current view (offense or defense)
        availablePositions() {
            return this.offenseView ? this.offensePositions : this.defensePositions;
        },
        // Dynamically generates a file path for the selected team logo based on team name
        teamLogo() {
            const teamSlug = this.selectedTeam.split(' ').pop().toLowerCase(); // Converts team name to slug format
            return `./${teamSlug}.svg`; // Assumes team logo files are named using team slug format
        }
    },
    methods: {
        // Toggles dark mode theme and updates the document attribute based on current theme state
        toggleDarkMode() {
            if (this.darkMode) {
                document.documentElement.setAttribute('data-theme', 'dark'); // Activates dark theme
            } else {
                document.documentElement.setAttribute('data-theme', 'light'); // Activates light theme
            }
        },
        // Switches between offense and defense view and resets position selection to "All"
        toggleOffenseDefense() {
            this.offenseView = !this.offenseView; // Toggles between offense and defense view
            this.selectedPosition = ''; // Resets position filter when view changes
        },
        // Filters players based on team, view type (offense/defense), and position selection
        filterPlayers(type) {
            const players = this.playersData[this.selectedTeam][type]; // Retrieves players by team and type
            if (this.selectedPosition) {
                // Returns players for specific position if selected
                return { [this.selectedPosition]: players[this.selectedPosition] };
            }
            return players; // Returns all players for the type if no specific position selected
        },
        // Sorts players in the specified position and order (ascending/descending) and updates sorted order state
        sortPlayers(type, position, order) {
            this.sortedOrder[position] = order; // Saves sorting order for the position
            const players = this.playersData[this.selectedTeam][type][position]; // Gets players for specific position
            if (order === 'asc') {
                players.sort(); // Sorts players alphabetically (ascending)
            } else {
                players.sort().reverse(); // Sorts players alphabetically (descending)
            }
        }
    }
});

// Mount the Vue app to the DOM element with id 'app'
app.mount('#app');
