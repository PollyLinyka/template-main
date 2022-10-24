import React from 'react';


class App extends React.Component <{}, {items: Array<String>, DataisLoaded: boolean, error: any}> {
    
    constructor(props: any) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false,
            error: null
        };
    }
   
    componentDidMount() {
        fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=6808816d086d4c48075217bd2cc178a1&format=json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json.tracks.track,
                    DataisLoaded: true
                });
            },
            (error) => {
              this.setState({
                DataisLoaded: true,
                error
              });
            }
            )
    }

    render() {
        const { DataisLoaded, items, error } = this.state;
        if (error) return <div> Error: {error.message}</div>;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                Array.from(items).map((item: any) => ( 
                <ol>
                    Name: { item.name }, 
                    Artist name: { item.artist.name }, 
                    src: {item.image.text}
                </ol>
                ))
            }
        </div>
    );
}
}

export default App;
