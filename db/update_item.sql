update product
set name=$(name), description=$(description), price=$(price), image_url=$(image)
where product_id=$(id);
select * from product;