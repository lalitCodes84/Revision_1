const SuperheroCard = (props) => {
    const { name, age, powers, address, isBachelor, imageUrl } = props.superhero;

    return (
      <div className="superhero-card">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Powers: {powers.join(', ')}</p>
        <p>Address: {address.street}, {address.city}, {address.country}</p>
        <p className={isBachelor ? 'is-bachelor-true' : 'is-bachelor-false'}>
          {isBachelor ? 'Bachelor' : 'Not Bachelor'}
        </p>
      </div>
    );
  };

  function App() {
    const superheroes = [
      {
        name: "Iron Man",
        powers: ["Rich", "Fly", "Genius"],
        address: {
          street: "Avenger Tower St",
          city: "New York",
          country: "USA",
        },
        age: 38,
        isBachelor: false,
        imageUrl:
          "https://pngimg.com/d/ironman_PNG38.png",
      },
      {
        name: "Spider Man",
        powers: ["Web shoot", "swing by webs"],
        address: {
          street: "Central St",
          city: "New York",
          country: "USA",
        },
        age: 27,
        isBachelor: true,
        imageUrl:
          "https://pngimg.com/d/spider_man_PNG97.png",
      },
      {
        name: "Optimus Prime",
        powers: ["Run Fast", "Body Transform", "Heavy Weapons"],
        address: {
          street: "America",
          city: "New York",
          country: "USA",
        },
        age: 55,
        isBachelor: true,
        imageUrl:
          "https://www.pikpng.com/pngl/b/48-488100_seth-rollins-clipart-png-transparent-transformers-optimus-prime.png",
      },
    ];

    return (
      <>
        {superheroes.map((superhero, index) => (
          <SuperheroCard key={index} superhero={superhero} />
        ))}
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);