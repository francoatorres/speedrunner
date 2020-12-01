M-FIRST ((
    | ¿En qué página te gustaría basarte?
    | Será replicada igualmente, pero a tu gusto
), B-FIRST)

M-SECOND ((
    | ¿Qué es lo que quieres mejorar?
), B-SECOND)

M-RESTAURANT (B-THIRD)
M-STORE (B-THIRD)
M-PRODUCT (B-THIRD)

"""

B-FIRST ((
    | Más visitas a mi local<>
    | Más llamadas
    | Más visitas a tu sitio web
), M-SECOND)

B-SECOND ((
    | Tu restaurante: ((
        | Tus platos deben ser increibles
        | Dejame ayudarte, elije una increible página web
    ), M-RESTAURANT)
    | Tu tienda: ((
        | Increible lo que vendes
    ), M-STORE)
    | Tu producto especial: ((
        | Increible tus productos
    ), M-PRODUCT)
))