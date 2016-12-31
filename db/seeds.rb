# add more cards here
# after running rake db:seed, move cards data over to the old.rb

# {1: Druid, 2: Hunter, 3: Mage, 4: Paladin, 5: Priest, 6: Rogue, 7: Shaman,
#  8: Warlock, 9: Warrior, 10: Neutral, 11: Tri-Class }

# sample card creating format
# Card.create!(image_url: 'http://i.imgur.com/ccHsfLA.png', name: 'Toxic Sewer Ooze', hero_class: 10, mana: 3, attack: 4, health: 3, rarity: 'common', card_text: 'Battlecry: Remove 1 Durability from your opponent\'s weapon', expansion_id: 1, released: false)

# keep this line at the end of this file always
User.update_all_user_rating_length
