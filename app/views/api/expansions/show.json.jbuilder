cards = {}

@cards.each do |card|
  data = {
    id: card.id,
    image_url: card.image_url,
    name: card.name,
    hero_class: card.hero_class,
    tribe: card.tribe,
    mana: card.mana,
    attack: card.attack,
    health: card.health,
    card_text: card.card_text,
    expansion_id: card.expansion_id,
    released: card.released }
  cards[card.id] = data
end

json.cards cards
