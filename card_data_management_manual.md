## To release last expansion, in rails console, run below
Expansion.last.release_expansion

## To release certain expansion, select expansion first and then run #release_expansion

## To seed more cards, add cards in db/seeds.rb and run below then, move data to db/old.rb (for just in case)
rake db:seed
