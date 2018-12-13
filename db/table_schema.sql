DROP TABLE IF EXISTS product
CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name varchar(40) NOT NULL,
  description varchar(80) NOT NULL,
  price integer NOT NULL,
  image_url text NOT NULL
);

INSERT INTO product(name, description, price, image_url)
VALUES ('croc', 'tooth hurty', 20, 'https://i.ebayimg.com/images/g/gXYAAOSwAc1ZpkzD/s-l300.jpg'),
('avocado', 'free shavocado', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiqUJrWhYoqwWZxW0xaw6VUDNetRJ5Y4D0odkFeccmHVyqkbo'),
('elmo', 'creepy dancing doll that likes to be tickled', 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFIn-V925XUTzaWRwi3HaNpvwFul3R2LfL40DYP1cxcIa0qNB1w')
