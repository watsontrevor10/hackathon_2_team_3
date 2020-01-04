class AddColumnToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :video_id, :integer
    add_foreign_key :comments, :videos
  end
end
