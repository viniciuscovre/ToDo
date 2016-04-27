class User < ActiveRecord::Base
  has_many :lists
end
