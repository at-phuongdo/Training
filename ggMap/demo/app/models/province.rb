class Province < ApplicationRecord
  include Featurable

  featurable :geom, [:name]
end
