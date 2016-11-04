# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

first = Expansion.create!(title: 'first')
second = Expansion.create!(title: 'second')
third = Expansion.create!(title: 'third')
fourth = Expansion.create!(title: 'fourth')
fifth = Expansion.create!(title: 'fifth')

one = Card.create!(image_url: 'http://res.cloudinary.com/wkdal720/image/upload/v1473346607/seafood_gvpnfz.jpg', name: 'first', hero_class: 'first', tribe: 'first', mana: 1, attack: 1, health: 1, card_text: 'first', expansion_id: 1, released: false)

two = Card.create!(image_url: 'http://res.cloudinary.com/wkdal720/image/upload/v1472664911/breakfast_v5z2ti.jpg', name: 'second', hero_class: 'second', tribe: 'second', mana: 2, attack: 2, health: 2, card_text: 'second', expansion_id: 2, released: false)

thr = Card.create!(image_url: 'http://res.cloudinary.com/wkdal720/image/upload/v1472664911/Desserts_r0fabf.jpg', name: 'third', hero_class: 'third', tribe: 'third', mana: 3, attack: 3, health: 3, card_text: 'third', expansion_id: 3, released: false)

four = Card.create!(image_url: 'http://res.cloudinary.com/wkdal720/image/upload/v1472664912/Maindish_pkxhrw.jpg', name: 'fourth', hero_class: 'fourth', tribe: 'fourth', mana: 4, attack: 4, health: 4, card_text: 'fourth', expansion_id: 4, released: false)

five = Card.create!(image_url: 'http://res.cloudinary.com/wkdal720/image/upload/v1472664911/Appetizers_rw1fgb.jpg', name: 'fifth', hero_class: 'fifth', tribe: 'fifth', mana: 5, attack: 5, health: 5, card_text: 'fifth', expansion_id: 5, released: false)
