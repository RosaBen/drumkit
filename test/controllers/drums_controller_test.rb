require "test_helper"

class DrumsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get drums_index_url
    assert_response :success
  end
end
