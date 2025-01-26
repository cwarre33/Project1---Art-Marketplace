const itemDetails = {
    'item1': {
        title: '"Squeaky Flies in the Mud"',
        artist: 'David Lynch',
        image: 'images/davidLynch.jpg',
        price: '$3999',
        condition: 'Original Artwork',
        seller: 'David Lynch Gallery',
        offers: '2',
        description: 'Dark, abstract work exploring subconscious fears and fragmented narratives by David Lynch. A unique piece that delves into the surreal and unsettling aspects of human perception.'
    },
    'item2': {
        title: '"Europe After the Rain II"',
        artist: 'Max Ernst',
        image: 'images/ernst6b.jpg',
        price: '$1299',
        condition: 'Limited Edition Print',
        seller: 'Surrealist Art Collective',
        offers: '1',
        description: 'A surreal, post-apocalyptic landscape created with innovative frottage techniques by Max Ernst. This piece showcases Ernst\'s groundbreaking approach to surrealist art.'
    },
    'item3': {
        title: '"In the Land of the Dead, Stepping on the Tail of a Rainbow"',
        artist: 'Takashi Murakami',
        image: 'images/murakami.jpg',
        price: '$5999',
        condition: 'Original Canvas',
        seller: 'Murakami Studio',
        offers: '3',
        description: 'Combines surreal, colorful imagery with a sense of dread and mythological symbolism by Takashi Murakami. A vibrant and complex work exploring themes of Japanese pop culture and existentialism.'
    },
    'item4': {
        title: '"The Persistence of Memory"',
        artist: 'Salvador Dali',
        image: 'images/salvador-dali',
        price: '$2999',
        condition: 'Vintage Print',
        seller: 'Surrealist Art Gallery',
        offers: '2',
        description: 'A quintessential surrealist work featuring melting clocks in a dreamlike landscape by Salvador Dali. This iconic piece challenges perception of time and reality.'
    },
    'item5': {
        title: '"Untitled"',
        artist: 'Zdzisław Beksiński',
        image: 'images/untitled.jpeg',
        price: '$1499',
        condition: 'Original Painting',
        seller: 'Dark Art Collective',
        offers: '1',
        description: 'Features decaying, dreamlike structures that evoke existential and otherworldly themes by Zdzisław Beksiński. A haunting work that explores the boundaries between reality and nightmare.'
    },
    'item6': {
        title: '"Study after Velázquez\'s Portrait of Pope Innocent X"',
        artist: 'Francis Bacon',
        image: 'images/Velazquez.jpeg',
        price: '$1599',
        condition: 'Limited Edition Print',
        seller: 'Modern Art Retrospective',
        offers: '2',
        description: 'Part of a series of around 50 variations, the work explores psychological tension and existential themes by Francis Bacon. A powerful reinterpretation of classical portraiture.'
    }
};

function loadItemDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('item');
    const item = itemDetails[itemId];

    if (item) {
        document.getElementById('item-image').src = item.image;
        document.getElementById('item-image').alt = item.title;
        document.getElementById('item-title').textContent = item.title;
        document.getElementById('item-price').textContent = item.price;
        document.getElementById('item-condition').textContent = item.condition;
        document.getElementById('item-seller').textContent = item.seller;
        document.getElementById('item-offers').textContent = item.offers;
        document.getElementById('item-description').textContent = item.description;

        const artistElement = document.getElementById('item-artist');
        if (artistElement) {
            artistElement.textContent = item.artist;
        }
    } else {
        document.querySelector('.item-detail-container').innerHTML = '<p>Item not found</p>';
    }
}

window.onload = loadItemDetails;