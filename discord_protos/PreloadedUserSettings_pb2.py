# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: PreloadedUserSettings.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1bPreloadedUserSettings.proto\x12\x1f\x64iscord_protos.discord_users.v1\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xd5\x93\x01\n\x15PreloadedUserSettings\x12V\n\x08versions\x18\x01 \x01(\x0b\x32?.discord_protos.discord_users.v1.PreloadedUserSettings.VersionsH\x00\x88\x01\x01\x12X\n\x05inbox\x18\x02 \x01(\x0b\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.InboxSettingsH\x01\x88\x01\x01\x12\\\n\x06guilds\x18\x03 \x01(\x0b\x32G.discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettingsH\x02\x88\x01\x01\x12\x65\n\x0cuser_content\x18\x04 \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettingsH\x03\x88\x01\x01\x12j\n\x0fvoice_and_video\x18\x05 \x01(\x0b\x32L.discord_protos.discord_users.v1.PreloadedUserSettings.VoiceAndVideoSettingsH\x04\x88\x01\x01\x12j\n\x0ftext_and_images\x18\x06 \x01(\x0b\x32L.discord_protos.discord_users.v1.PreloadedUserSettings.TextAndImagesSettingsH\x05\x88\x01\x01\x12g\n\rnotifications\x18\x07 \x01(\x0b\x32K.discord_protos.discord_users.v1.PreloadedUserSettings.NotificationSettingsH\x06\x88\x01\x01\x12\\\n\x07privacy\x18\x08 \x01(\x0b\x32\x46.discord_protos.discord_users.v1.PreloadedUserSettings.PrivacySettingsH\x07\x88\x01\x01\x12X\n\x05\x64\x65\x62ug\x18\t \x01(\x0b\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.DebugSettingsH\x08\x88\x01\x01\x12\x65\n\x0cgame_library\x18\n \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.GameLibrarySettingsH\t\x88\x01\x01\x12Z\n\x06status\x18\x0b \x01(\x0b\x32\x45.discord_protos.discord_users.v1.PreloadedUserSettings.StatusSettingsH\n\x88\x01\x01\x12\x66\n\x0clocalization\x18\x0c \x01(\x0b\x32K.discord_protos.discord_users.v1.PreloadedUserSettings.LocalizationSettingsH\x0b\x88\x01\x01\x12\x62\n\nappearance\x18\r \x01(\x0b\x32I.discord_protos.discord_users.v1.PreloadedUserSettings.AppearanceSettingsH\x0c\x88\x01\x01\x12_\n\rguild_folders\x18\x0e \x01(\x0b\x32\x43.discord_protos.discord_users.v1.PreloadedUserSettings.GuildFoldersH\r\x88\x01\x01\x12X\n\tfavorites\x18\x0f \x01(\x0b\x32@.discord_protos.discord_users.v1.PreloadedUserSettings.FavoritesH\x0e\x88\x01\x01\x12i\n\x16\x61udio_context_settings\x18\x10 \x01(\x0b\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettingsH\x0f\x88\x01\x01\x12\x64\n\x0b\x63ommunities\x18\x11 \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.CommunitiesSettingsH\x10\x88\x01\x01\x12`\n\tbroadcast\x18\x12 \x01(\x0b\x32H.discord_protos.discord_users.v1.PreloadedUserSettings.BroadcastSettingsH\x11\x88\x01\x01\x12X\n\x05\x63lips\x18\x13 \x01(\x0b\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.ClipsSettingsH\x12\x88\x01\x01\x12_\n\tfor_later\x18\x14 \x01(\x0b\x32G.discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterSettingsH\x13\x88\x01\x01\x12\x63\n\x0fsafety_settings\x18\x15 \x01(\x0b\x32\x45.discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsH\x14\x88\x01\x01\x12\x61\n\x0eicymi_settings\x18\x16 \x01(\x0b\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.ICYMISettingsH\x15\x88\x01\x01\x1aP\n\x08Versions\x12\x16\n\x0e\x63lient_version\x18\x01 \x01(\r\x12\x16\n\x0eserver_version\x18\x02 \x01(\r\x12\x14\n\x0c\x64\x61ta_version\x18\x03 \x01(\r\x1a~\n\rInboxSettings\x12T\n\x0b\x63urrent_tab\x18\x01 \x01(\x0e\x32?.discord_protos.discord_users.v1.PreloadedUserSettings.InboxTab\x12\x17\n\x0fviewed_tutorial\x18\x02 \x01(\x08\x1a\xbe\x01\n\x10\x43hannelIconEmoji\x12-\n\x02id\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.UInt64ValueH\x00\x88\x01\x01\x12/\n\x04name\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x01\x88\x01\x01\x12\x30\n\x05\x63olor\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt64ValueH\x02\x88\x01\x01\x42\x05\n\x03_idB\x07\n\x05_nameB\x08\n\x06_color\x1a\x85\x01\n\x1d\x43ustomNotificationSoundConfig\x12\x45\n\x1anotification_sound_pack_id\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x00\x88\x01\x01\x42\x1d\n\x1b_notification_sound_pack_id\x1a\xc9\x02\n\x0f\x43hannelSettings\x12\x1a\n\x12\x63ollapsed_in_inbox\x18\x01 \x01(\x08\x12`\n\nicon_emoji\x18\x02 \x01(\x0b\x32G.discord_protos.discord_users.v1.PreloadedUserSettings.ChannelIconEmojiH\x00\x88\x01\x01\x12\x83\x01\n custom_notification_sound_config\x18\x03 \x01(\x0b\x32T.discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfigH\x01\x88\x01\x01\x42\r\n\x0b_icon_emojiB#\n!_custom_notification_sound_config\x1a\x35\n\x0f\x43ustomCallSound\x12\x10\n\x08sound_id\x18\x01 \x01(\x06\x12\x10\n\x08guild_id\x18\x02 \x01(\x06\x1a\xa5\x01\n\x13\x43hannelListSettings\x12\x31\n\x06layout\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x00\x88\x01\x01\x12;\n\x10message_previews\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x01\x88\x01\x01\x42\t\n\x07_layoutB\x13\n\x11_message_previews\x1a\xd1\x07\n\rGuildSettings\x12\x64\n\x08\x63hannels\x18\x01 \x03(\x0b\x32R.discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings.ChannelsEntry\x12\x14\n\x0chub_progress\x18\x02 \x01(\r\x12!\n\x19guild_onboarding_progress\x18\x03 \x01(\r\x12\x43\n\x1aguild_recents_dismissed_at\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x00\x88\x01\x01\x12\x1f\n\x17\x64ismissed_guild_content\x18\x05 \x01(\x0c\x12_\n\njoin_sound\x18\x06 \x01(\x0b\x32\x46.discord_protos.discord_users.v1.PreloadedUserSettings.CustomCallSoundH\x01\x88\x01\x01\x12~\n%mobile_redesign_channel_list_settings\x18\x07 \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.ChannelListSettingsH\x02\x88\x01\x01\x12\x1f\n\x17\x64isable_raid_alert_push\x18\x08 \x01(\x08\x12\x1e\n\x16\x64isable_raid_alert_nag\x18\t \x01(\x08\x12\x83\x01\n custom_notification_sound_config\x18\n \x01(\x0b\x32T.discord_protos.discord_users.v1.PreloadedUserSettings.CustomNotificationSoundConfigH\x03\x88\x01\x01\x12\x1d\n\x15leaderboards_disabled\x18\x0b \x01(\x08\x1aw\n\rChannelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\x06\x12U\n\x05value\x18\x02 \x01(\x0b\x32\x46.discord_protos.discord_users.v1.PreloadedUserSettings.ChannelSettings:\x02\x38\x01\x42\x1d\n\x1b_guild_recents_dismissed_atB\r\n\x0b_join_soundB(\n&_mobile_redesign_channel_list_settingsB#\n!_custom_notification_sound_config\x1a\xec\x01\n\x10\x41llGuildSettings\x12\x63\n\x06guilds\x18\x01 \x03(\x0b\x32S.discord_protos.discord_users.v1.PreloadedUserSettings.AllGuildSettings.GuildsEntry\x1as\n\x0bGuildsEntry\x12\x0b\n\x03key\x18\x01 \x01(\x06\x12S\n\x05value\x18\x02 \x01(\x0b\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.GuildSettings:\x02\x38\x01\x1a`\n RecurringDismissibleContentState\x12\x1e\n\x16last_dismissed_version\x18\x01 \x01(\r\x12\x1c\n\x14last_dismissed_at_ms\x18\x02 \x01(\x04\x1a\x91\x07\n\x13UserContentSettings\x12\x1a\n\x12\x64ismissed_contents\x18\x01 \x01(\x0c\x12W\n,last_dismissed_outbound_promotion_start_date\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x00\x88\x01\x01\x12J\n!premium_tier_0_modal_dismissed_at\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x01\x88\x01\x01\x12M\n$guild_onboarding_upsell_dismissed_at\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x02\x88\x01\x01\x12R\n)safety_user_sentiment_notice_dismissed_at\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.TimestampH\x03\x88\x01\x01\x12\"\n\x1alast_received_changelog_id\x18\x06 \x01(\x06\x12\x9f\x01\n$recurring_dismissible_content_states\x18\x07 \x03(\x0b\x32q.discord_protos.discord_users.v1.PreloadedUserSettings.UserContentSettings.RecurringDismissibleContentStatesEntry\x1a\xa1\x01\n&RecurringDismissibleContentStatesEntry\x12\x0b\n\x03key\x18\x01 \x01(\x05\x12\x66\n\x05value\x18\x02 \x01(\x0b\x32W.discord_protos.discord_users.v1.PreloadedUserSettings.RecurringDismissibleContentState:\x02\x38\x01\x42/\n-_last_dismissed_outbound_promotion_start_dateB$\n\"_premium_tier_0_modal_dismissed_atB\'\n%_guild_onboarding_upsell_dismissed_atB,\n*_safety_user_sentiment_notice_dismissed_at\x1a-\n\x19VideoFilterBackgroundBlur\x12\x10\n\x08use_blur\x18\x01 \x01(\x08\x1a\x32\n\x10VideoFilterAsset\x12\n\n\x02id\x18\x01 \x01(\x06\x12\x12\n\nasset_hash\x18\x02 \x01(\t\x1a$\n\x12SoundboardSettings\x12\x0e\n\x06volume\x18\x01 \x01(\x02\x1a\x99\x07\n\x15VoiceAndVideoSettings\x12^\n\x04\x62lur\x18\x01 \x01(\x0b\x32P.discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterBackgroundBlur\x12\x15\n\rpreset_option\x18\x02 \x01(\r\x12]\n\x0c\x63ustom_asset\x18\x03 \x01(\x0b\x32G.discord_protos.discord_users.v1.PreloadedUserSettings.VideoFilterAsset\x12=\n\x14\x61lways_preview_video\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x12\x36\n\x0b\x61\x66k_timeout\x18\x06 \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x01\x88\x01\x01\x12\x45\n\x1cstream_notifications_enabled\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x12I\n native_phone_integration_enabled\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x03\x88\x01\x01\x12k\n\x13soundboard_settings\x18\t \x01(\x0b\x32I.discord_protos.discord_users.v1.PreloadedUserSettings.SoundboardSettingsH\x04\x88\x01\x01\x12@\n\x17\x64isable_stream_previews\x18\n \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x05\x88\x01\x01\x12:\n\x10soundmoji_volume\x18\x0b \x01(\x0b\x32\x1b.google.protobuf.FloatValueH\x06\x88\x01\x01\x42\x17\n\x15_always_preview_videoB\x0e\n\x0c_afk_timeoutB\x1f\n\x1d_stream_notifications_enabledB#\n!_native_phone_integration_enabledB\x16\n\x14_soundboard_settingsB\x1a\n\x18_disable_stream_previewsB\x13\n\x11_soundmoji_volume\x1a\xf9\x02\n\x17\x45xplicitContentSettings\x12p\n\x17\x65xplicit_content_guilds\x18\x01 \x01(\x0e\x32O.discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction\x12s\n\x1a\x65xplicit_content_friend_dm\x18\x02 \x01(\x0e\x32O.discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction\x12w\n\x1e\x65xplicit_content_non_friend_dm\x18\x03 \x01(\x0e\x32O.discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentRedaction\x1a\xdf\x01\n\x15KeywordFilterSettings\x12\x32\n\tprofanity\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x12\x37\n\x0esexual_content\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x01\x88\x01\x01\x12.\n\x05slurs\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x42\x0c\n\n_profanityB\x11\n\x0f_sexual_contentB\x08\n\x06_slurs\x1a\xe1\x14\n\x15TextAndImagesSettings\x12>\n\x13\x64iversity_surrogate\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x00\x88\x01\x01\x12<\n\x13use_rich_chat_input\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x01\x88\x01\x01\x12;\n\x12use_thread_sidebar\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x12:\n\x0frender_spoilers\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x03\x88\x01\x01\x12\'\n\x1f\x65moji_picker_collapsed_sections\x18\x05 \x03(\t\x12)\n!sticker_picker_collapsed_sections\x18\x06 \x03(\t\x12@\n\x17view_image_descriptions\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x04\x88\x01\x01\x12\x41\n\x18show_command_suggestions\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x05\x88\x01\x01\x12@\n\x17inline_attachment_media\x18\t \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x06\x88\x01\x01\x12;\n\x12inline_embed_media\x18\n \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x07\x88\x01\x01\x12\x36\n\rgif_auto_play\x18\x0b \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x08\x88\x01\x01\x12\x36\n\rrender_embeds\x18\x0c \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\t\x88\x01\x01\x12\x39\n\x10render_reactions\x18\r \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\n\x88\x01\x01\x12\x36\n\ranimate_emoji\x18\x0e \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x0b\x88\x01\x01\x12;\n\x10\x61nimate_stickers\x18\x0f \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x0c\x88\x01\x01\x12;\n\x12\x65nable_tts_command\x18\x10 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\r\x88\x01\x01\x12@\n\x17message_display_compact\x18\x11 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x0e\x88\x01\x01\x12\x42\n\x17\x65xplicit_content_filter\x18\x13 \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x0f\x88\x01\x01\x12\x39\n\x10view_nsfw_guilds\x18\x14 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x10\x88\x01\x01\x12:\n\x11\x63onvert_emoticons\x18\x15 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x11\x88\x01\x01\x12G\n\x1e\x65xpression_suggestions_enabled\x18\x16 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x12\x88\x01\x01\x12;\n\x12view_nsfw_commands\x18\x17 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x13\x88\x01\x01\x12>\n\x15use_legacy_chat_input\x18\x18 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x14\x88\x01\x01\x12,\n$soundboard_picker_collapsed_sections\x18\x19 \x03(\t\x12\x39\n\x0e\x64m_spam_filter\x18\x1a \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x15\x88\x01\x01\x12`\n\x11\x64m_spam_filter_v2\x18\x1b \x01(\x0e\x32\x45.discord_protos.discord_users.v1.PreloadedUserSettings.DmSpamFilterV2\x12I\n include_stickers_in_autocomplete\x18\x1c \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x16\x88\x01\x01\x12v\n\x19\x65xplicit_content_settings\x18\x1d \x01(\x0b\x32N.discord_protos.discord_users.v1.PreloadedUserSettings.ExplicitContentSettingsH\x17\x88\x01\x01\x12r\n\x17keyword_filter_settings\x18\x1e \x01(\x0b\x32L.discord_protos.discord_users.v1.PreloadedUserSettings.KeywordFilterSettingsH\x18\x88\x01\x01\x12J\n!include_soundmoji_in_autocomplete\x18\x1f \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x19\x88\x01\x01\x42\x16\n\x14_diversity_surrogateB\x16\n\x14_use_rich_chat_inputB\x15\n\x13_use_thread_sidebarB\x12\n\x10_render_spoilersB\x1a\n\x18_view_image_descriptionsB\x1b\n\x19_show_command_suggestionsB\x1a\n\x18_inline_attachment_mediaB\x15\n\x13_inline_embed_mediaB\x10\n\x0e_gif_auto_playB\x10\n\x0e_render_embedsB\x13\n\x11_render_reactionsB\x10\n\x0e_animate_emojiB\x13\n\x11_animate_stickersB\x15\n\x13_enable_tts_commandB\x1a\n\x18_message_display_compactB\x1a\n\x18_explicit_content_filterB\x13\n\x11_view_nsfw_guildsB\x14\n\x12_convert_emoticonsB!\n\x1f_expression_suggestions_enabledB\x15\n\x13_view_nsfw_commandsB\x18\n\x16_use_legacy_chat_inputB\x11\n\x0f_dm_spam_filterB#\n!_include_stickers_in_autocompleteB\x1c\n\x1a_explicit_content_settingsB\x1a\n\x18_keyword_filter_settingsB$\n\"_include_soundmoji_in_autocomplete\x1a\xd4\x04\n\x14NotificationSettings\x12\x42\n\x19show_in_app_notifications\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x12\x42\n\x19notify_friends_on_go_live\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x01\x88\x01\x01\x12+\n#notification_center_acked_before_id\x18\x03 \x01(\x06\x12L\n#enable_burst_reaction_notifications\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x12\x33\n\nquiet_mode\x18\x05 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x03\x88\x01\x01\x12 \n\x18\x66ocus_mode_expires_at_ms\x18\x06 \x01(\x06\x12o\n\x16reaction_notifications\x18\x07 \x01(\x0e\x32O.discord_protos.discord_users.v1.PreloadedUserSettings.ReactionNotificationTypeB\x1c\n\x1a_show_in_app_notificationsB\x1c\n\x1a_notify_friends_on_go_liveB&\n$_enable_burst_reaction_notificationsB\r\n\x0b_quiet_mode\x1a\xc4\x0f\n\x0fPrivacySettings\x12M\n$allow_activity_party_privacy_friends\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x12S\n*allow_activity_party_privacy_voice_channel\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x01\x88\x01\x01\x12\x1c\n\x14restricted_guild_ids\x18\x03 \x03(\x06\x12!\n\x19\x64\x65\x66\x61ult_guilds_restricted\x18\x04 \x01(\x08\x12%\n\x1d\x61llow_accessibility_detection\x18\x07 \x01(\x08\x12\x41\n\x18\x64\x65tect_platform_accounts\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x12\x35\n\x0cpasswordless\x18\t \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x03\x88\x01\x01\x12=\n\x14\x63ontact_sync_enabled\x18\n \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x04\x88\x01\x01\x12>\n\x13\x66riend_source_flags\x18\x0b \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x05\x88\x01\x01\x12\x41\n\x16\x66riend_discovery_flags\x18\x0c \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x06\x88\x01\x01\x12%\n\x1d\x61\x63tivity_restricted_guild_ids\x18\r \x03(\x06\x12\x88\x01\n\"default_guilds_activity_restricted\x18\x0e \x01(\x0e\x32\\.discord_protos.discord_users.v1.PreloadedUserSettings.GuildActivityStatusRestrictionDefault\x12-\n%activity_joining_restricted_guild_ids\x18\x0f \x03(\x06\x12,\n$message_request_restricted_guild_ids\x18\x10 \x03(\x06\x12K\n\"default_message_request_restricted\x18\x11 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x07\x88\x01\x01\x12\x38\n\x0f\x64rops_opted_out\x18\x12 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x08\x88\x01\x01\x12\x43\n\x1anon_spam_retraining_opt_in\x18\x13 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\t\x88\x01\x01\x12>\n\x15\x66\x61mily_center_enabled\x18\x14 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\n\x88\x01\x01\x12\x41\n\x18\x66\x61mily_center_enabled_v2\x18\x15 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x0b\x88\x01\x01\x12=\n\x14hide_legacy_username\x18\x16 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x0c\x88\x01\x01\x12L\n#inappropriate_conversation_warnings\x18\x17 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\r\x88\x01\x01\x12=\n\x14recent_games_enabled\x18\x18 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x0e\x88\x01\x01\x12\x81\x01\n\"guilds_leaderboard_opt_out_default\x18\x19 \x01(\x0e\x32U.discord_protos.discord_users.v1.PreloadedUserSettings.GuildsLeaderboardOptOutDefaultB\'\n%_allow_activity_party_privacy_friendsB-\n+_allow_activity_party_privacy_voice_channelB\x1b\n\x19_detect_platform_accountsB\x0f\n\r_passwordlessB\x17\n\x15_contact_sync_enabledB\x16\n\x14_friend_source_flagsB\x19\n\x17_friend_discovery_flagsB%\n#_default_message_request_restrictedB\x12\n\x10_drops_opted_outB\x1d\n\x1b_non_spam_retraining_opt_inB\x18\n\x16_family_center_enabledB\x1b\n\x19_family_center_enabled_v2B\x17\n\x15_hide_legacy_usernameB&\n$_inappropriate_conversation_warningsB\x17\n\x15_recent_games_enabled\x1au\n\rDebugSettings\x12\x44\n\x1brtc_panel_show_voice_states\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x42\x1e\n\x1c_rtc_panel_show_voice_states\x1a\xad\x02\n\x13GameLibrarySettings\x12\x41\n\x18install_shortcut_desktop\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x12\x44\n\x1binstall_shortcut_start_menu\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x01\x88\x01\x01\x12:\n\x11\x64isable_games_tab\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x42\x1b\n\x19_install_shortcut_desktopB\x1e\n\x1c_install_shortcut_start_menuB\x14\n\x12_disable_games_tab\x1ap\n\x0c\x43ustomStatus\x12\x0c\n\x04text\x18\x01 \x01(\t\x12\x10\n\x08\x65moji_id\x18\x02 \x01(\x06\x12\x12\n\nemoji_name\x18\x03 \x01(\t\x12\x15\n\rexpires_at_ms\x18\x04 \x01(\x06\x12\x15\n\rcreated_at_ms\x18\x05 \x01(\x06\x1a\xb1\x02\n\x0eStatusSettings\x12\x31\n\x06status\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x00\x88\x01\x01\x12_\n\rcustom_status\x18\x02 \x01(\x0b\x32\x43.discord_protos.discord_users.v1.PreloadedUserSettings.CustomStatusH\x01\x88\x01\x01\x12:\n\x11show_current_game\x18\x03 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x02\x88\x01\x01\x12\x1c\n\x14status_expires_at_ms\x18\x04 \x01(\x06\x42\t\n\x07_statusB\x10\n\x0e_custom_statusB\x14\n\x12_show_current_game\x1a\xa3\x01\n\x14LocalizationSettings\x12\x31\n\x06locale\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x00\x88\x01\x01\x12\x39\n\x0ftimezone_offset\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.Int32ValueH\x01\x88\x01\x01\x42\t\n\x07_localeB\x12\n\x10_timezone_offset\x1a\x81\x01\n\x13\x43lientThemeSettings\x12H\n\x1d\x62\x61\x63kground_gradient_preset_id\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.UInt32ValueH\x00\x88\x01\x01\x42 \n\x1e_background_gradient_preset_id\x1a\xf1\x06\n\x12\x41ppearanceSettings\x12K\n\x05theme\x18\x01 \x01(\x0e\x32<.discord_protos.discord_users.v1.PreloadedUserSettings.Theme\x12\x16\n\x0e\x64\x65veloper_mode\x18\x02 \x01(\x08\x12n\n\x15\x63lient_theme_settings\x18\x03 \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.ClientThemeSettingsH\x00\x88\x01\x01\x12 \n\x18mobile_redesign_disabled\x18\x04 \x01(\x08\x12>\n\x13\x63hannel_list_layout\x18\x06 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x01\x88\x01\x01\x12;\n\x10message_previews\x18\x07 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x02\x88\x01\x01\x12J\n!search_result_exact_count_enabled\x18\x08 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x03\x88\x01\x01\x12g\n\x14timestamp_hour_cycle\x18\t \x01(\x0e\x32I.discord_protos.discord_users.v1.PreloadedUserSettings.TimestampHourCycle\x12\x45\n\x1chappening_now_cards_disabled\x18\n \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x04\x88\x01\x01\x12]\n\x0flaunch_pad_mode\x18\x0b \x01(\x0e\x32\x44.discord_protos.discord_users.v1.PreloadedUserSettings.LaunchPadModeB\x18\n\x16_client_theme_settingsB\x16\n\x14_channel_list_layoutB\x13\n\x11_message_previewsB$\n\"_search_result_exact_count_enabledB\x1f\n\x1d_happening_now_cards_disabled\x1a\xcb\x01\n\x0bGuildFolder\x12\x11\n\tguild_ids\x18\x01 \x03(\x06\x12,\n\x02id\x18\x02 \x01(\x0b\x32\x1b.google.protobuf.Int64ValueH\x00\x88\x01\x01\x12/\n\x04name\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.StringValueH\x01\x88\x01\x01\x12\x30\n\x05\x63olor\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.UInt64ValueH\x02\x88\x01\x01\x42\x05\n\x03_idB\x07\n\x05_nameB\x08\n\x06_color\x1a|\n\x0cGuildFolders\x12S\n\x07\x66olders\x18\x01 \x03(\x0b\x32\x42.discord_protos.discord_users.v1.PreloadedUserSettings.GuildFolder\x12\x17\n\x0fguild_positions\x18\x02 \x03(\x06\x1a\xa2\x01\n\x0f\x46\x61voriteChannel\x12\x10\n\x08nickname\x18\x01 \x01(\t\x12X\n\x04type\x18\x02 \x01(\x0e\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannelType\x12\x10\n\x08position\x18\x03 \x01(\r\x12\x11\n\tparent_id\x18\x04 \x01(\x06\x1a\x8e\x02\n\tFavorites\x12q\n\x11\x66\x61vorite_channels\x18\x01 \x03(\x0b\x32V.discord_protos.discord_users.v1.PreloadedUserSettings.Favorites.FavoriteChannelsEntry\x12\r\n\x05muted\x18\x02 \x01(\x08\x1a\x7f\n\x15\x46\x61voriteChannelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\x06\x12U\n\x05value\x18\x02 \x01(\x0b\x32\x46.discord_protos.discord_users.v1.PreloadedUserSettings.FavoriteChannel:\x02\x38\x01\x1a\x63\n\x13\x41udioContextSetting\x12\r\n\x05muted\x18\x01 \x01(\x08\x12\x0e\n\x06volume\x18\x02 \x01(\x02\x12\x13\n\x0bmodified_at\x18\x03 \x01(\x06\x12\x18\n\x10soundboard_muted\x18\x04 \x01(\x08\x1a\xc3\x03\n\rAudioSettings\x12\\\n\x04user\x18\x01 \x03(\x0b\x32N.discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings.UserEntry\x12`\n\x06stream\x18\x02 \x03(\x0b\x32P.discord_protos.discord_users.v1.PreloadedUserSettings.AudioSettings.StreamEntry\x1aw\n\tUserEntry\x12\x0b\n\x03key\x18\x01 \x01(\x06\x12Y\n\x05value\x18\x02 \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting:\x02\x38\x01\x1ay\n\x0bStreamEntry\x12\x0b\n\x03key\x18\x01 \x01(\x06\x12Y\n\x05value\x18\x02 \x01(\x0b\x32J.discord_protos.discord_users.v1.PreloadedUserSettings.AudioContextSetting:\x02\x38\x01\x1ao\n\x13\x43ommunitiesSettings\x12>\n\x15\x64isable_home_auto_nav\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x42\x18\n\x16_disable_home_auto_nav\x1a\xde\x01\n\x11\x42roadcastSettings\x12\x36\n\rallow_friends\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x12\x19\n\x11\x61llowed_guild_ids\x18\x02 \x03(\x06\x12\x18\n\x10\x61llowed_user_ids\x18\x03 \x03(\x06\x12\x37\n\x0e\x61uto_broadcast\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x01\x88\x01\x01\x42\x10\n\x0e_allow_friendsB\x11\n\x0f_auto_broadcast\x1ai\n\rClipsSettings\x12>\n\x15\x61llow_voice_recording\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.BoolValueH\x00\x88\x01\x01\x42\x18\n\x16_allow_voice_recording\x1ak\n\x10\x46orLaterSettings\x12W\n\x0b\x63urrent_tab\x18\x01 \x01(\x0e\x32\x42.discord_protos.discord_users.v1.PreloadedUserSettings.ForLaterTab\x1a\xac\x01\n\x0eSafetySettings\x12o\n\x16safety_settings_preset\x18\x01 \x01(\x0e\x32O.discord_protos.discord_users.v1.PreloadedUserSettings.SafetySettingsPresetType\x12)\n!ignore_profile_speedbump_disabled\x18\x02 \x01(\x08\x1a*\n\rICYMISettings\x12\x19\n\x11\x66\x65\x65\x64_generated_at\x18\x01 \x01(\x06\"\xb5\x01\n\x08InboxTab\x12\x19\n\x15INBOX_TAB_UNSPECIFIED\x10\x00\x12\x16\n\x12INBOX_TAB_MENTIONS\x10\x01\x12\x15\n\x11INBOX_TAB_UNREADS\x10\x02\x12\x13\n\x0fINBOX_TAB_TODOS\x10\x03\x12\x15\n\x11INBOX_TAB_FOR_YOU\x10\x04\x12\x1a\n\x16INBOX_TAB_GAME_INVITES\x10\x05\x12\x17\n\x13INBOX_TAB_BOOKMARKS\x10\x06\"\xa7\x01\n\x0e\x44mSpamFilterV2\x12#\n\x1f\x44M_SPAM_FILTER_V2_DEFAULT_UNSET\x10\x00\x12\x1e\n\x1a\x44M_SPAM_FILTER_V2_DISABLED\x10\x01\x12!\n\x1d\x44M_SPAM_FILTER_V2_NON_FRIENDS\x10\x02\x12-\n)DM_SPAM_FILTER_V2_FRIENDS_AND_NON_FRIENDS\x10\x03\"\xcb\x01\n\x18\x45xplicitContentRedaction\x12?\n;EXPLICIT_CONTENT_REDACTION_UNSET_EXPLICIT_CONTENT_REDACTION\x10\x00\x12#\n\x1f\x45XPLICIT_CONTENT_REDACTION_SHOW\x10\x01\x12#\n\x1f\x45XPLICIT_CONTENT_REDACTION_BLUR\x10\x02\x12$\n EXPLICIT_CONTENT_REDACTION_BLOCK\x10\x03\"\xb0\x01\n\x18ReactionNotificationType\x12\x34\n0REACTION_NOTIFICATION_TYPE_NOTIFICATIONS_ENABLED\x10\x00\x12\'\n#REACTION_NOTIFICATION_TYPE_ONLY_DMS\x10\x01\x12\x35\n1REACTION_NOTIFICATION_TYPE_NOTIFICATIONS_DISABLED\x10\x02\"\x9d\x01\n%GuildActivityStatusRestrictionDefault\x12\x31\n-GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_OFF\x10\x00\x12\x41\n=GUILD_ACTIVITY_STATUS_RESTRICTION_DEFAULT_ON_FOR_LARGE_GUILDS\x10\x01\"\x95\x01\n\x1eGuildsLeaderboardOptOutDefault\x12\x39\n5GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_OFF_FOR_NEW_GUILDS\x10\x00\x12\x38\n4GUILDS_LEADERBOARD_OPT_OUT_DEFAULT_ON_FOR_NEW_GUILDS\x10\x01\"_\n\x05Theme\x12\x0f\n\x0bTHEME_UNSET\x10\x00\x12\x0e\n\nTHEME_DARK\x10\x01\x12\x0f\n\x0bTHEME_LIGHT\x10\x02\x12\x10\n\x0cTHEME_DARKER\x10\x03\x12\x12\n\x0eTHEME_MIDNIGHT\x10\x04\"o\n\x12TimestampHourCycle\x12\x1d\n\x19TIMESTAMP_HOUR_CYCLE_AUTO\x10\x00\x12\x1c\n\x18TIMESTAMP_HOUR_CYCLE_H12\x10\x01\x12\x1c\n\x18TIMESTAMP_HOUR_CYCLE_H23\x10\x02\"\xc8\x01\n\rLaunchPadMode\x12\'\n#LAUNCH_PAD_MODE_LAUNCH_PAD_DISABLED\x10\x00\x12\x32\n.LAUNCH_PAD_MODE_LAUNCH_PAD_GESTURE_FULL_SCREEN\x10\x01\x12\x31\n-LAUNCH_PAD_MODE_LAUNCH_PAD_GESTURE_RIGHT_EDGE\x10\x02\x12\'\n#LAUNCH_PAD_MODE_LAUNCH_PAD_PULL_TAB\x10\x03\"\x9e\x01\n\x13\x46\x61voriteChannelType\x12\x35\n1FAVORITE_CHANNEL_TYPE_UNSET_FAVORITE_CHANNEL_TYPE\x10\x00\x12,\n(FAVORITE_CHANNEL_TYPE_REFERENCE_ORIGINAL\x10\x01\x12\"\n\x1e\x46\x41VORITE_CHANNEL_TYPE_CATEGORY\x10\x02\"}\n\x0b\x46orLaterTab\x12\x1d\n\x19\x46OR_LATER_TAB_UNSPECIFIED\x10\x00\x12\x15\n\x11\x46OR_LATER_TAB_ALL\x10\x01\x12\x1b\n\x17\x46OR_LATER_TAB_BOOKMARKS\x10\x02\x12\x1b\n\x17\x46OR_LATER_TAB_REMINDERS\x10\x03\"\xfb\x01\n\x18SafetySettingsPresetType\x12<\n8SAFETY_SETTINGS_PRESET_TYPE_UNSET_SAFETY_SETTINGS_PRESET\x10\x00\x12(\n$SAFETY_SETTINGS_PRESET_TYPE_BALANCED\x10\x01\x12&\n\"SAFETY_SETTINGS_PRESET_TYPE_STRICT\x10\x02\x12\'\n#SAFETY_SETTINGS_PRESET_TYPE_RELAXED\x10\x03\x12&\n\"SAFETY_SETTINGS_PRESET_TYPE_CUSTOM\x10\x04\x42\x0b\n\t_versionsB\x08\n\x06_inboxB\t\n\x07_guildsB\x0f\n\r_user_contentB\x12\n\x10_voice_and_videoB\x12\n\x10_text_and_imagesB\x10\n\x0e_notificationsB\n\n\x08_privacyB\x08\n\x06_debugB\x0f\n\r_game_libraryB\t\n\x07_statusB\x0f\n\r_localizationB\r\n\x0b_appearanceB\x10\n\x0e_guild_foldersB\x0c\n\n_favoritesB\x19\n\x17_audio_context_settingsB\x0e\n\x0c_communitiesB\x0c\n\n_broadcastB\x08\n\x06_clipsB\x0c\n\n_for_laterB\x12\n\x10_safety_settingsB\x11\n\x0f_icymi_settingsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'PreloadedUserSettings_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _PRELOADEDUSERSETTINGS_GUILDSETTINGS_CHANNELSENTRY._options = None
  _PRELOADEDUSERSETTINGS_GUILDSETTINGS_CHANNELSENTRY._serialized_options = b'8\001'
  _PRELOADEDUSERSETTINGS_ALLGUILDSETTINGS_GUILDSENTRY._options = None
  _PRELOADEDUSERSETTINGS_ALLGUILDSETTINGS_GUILDSENTRY._serialized_options = b'8\001'
  _PRELOADEDUSERSETTINGS_USERCONTENTSETTINGS_RECURRINGDISMISSIBLECONTENTSTATESENTRY._options = None
  _PRELOADEDUSERSETTINGS_USERCONTENTSETTINGS_RECURRINGDISMISSIBLECONTENTSTATESENTRY._serialized_options = b'8\001'
  _PRELOADEDUSERSETTINGS_FAVORITES_FAVORITECHANNELSENTRY._options = None
  _PRELOADEDUSERSETTINGS_FAVORITES_FAVORITECHANNELSENTRY._serialized_options = b'8\001'
  _PRELOADEDUSERSETTINGS_AUDIOSETTINGS_USERENTRY._options = None
  _PRELOADEDUSERSETTINGS_AUDIOSETTINGS_USERENTRY._serialized_options = b'8\001'
  _PRELOADEDUSERSETTINGS_AUDIOSETTINGS_STREAMENTRY._options = None
  _PRELOADEDUSERSETTINGS_AUDIOSETTINGS_STREAMENTRY._serialized_options = b'8\001'
  _globals['_PRELOADEDUSERSETTINGS']._serialized_start=131
  _globals['_PRELOADEDUSERSETTINGS']._serialized_end=19032
  _globals['_PRELOADEDUSERSETTINGS_VERSIONS']._serialized_start=2316
  _globals['_PRELOADEDUSERSETTINGS_VERSIONS']._serialized_end=2396
  _globals['_PRELOADEDUSERSETTINGS_INBOXSETTINGS']._serialized_start=2398
  _globals['_PRELOADEDUSERSETTINGS_INBOXSETTINGS']._serialized_end=2524
  _globals['_PRELOADEDUSERSETTINGS_CHANNELICONEMOJI']._serialized_start=2527
  _globals['_PRELOADEDUSERSETTINGS_CHANNELICONEMOJI']._serialized_end=2717
  _globals['_PRELOADEDUSERSETTINGS_CUSTOMNOTIFICATIONSOUNDCONFIG']._serialized_start=2720
  _globals['_PRELOADEDUSERSETTINGS_CUSTOMNOTIFICATIONSOUNDCONFIG']._serialized_end=2853
  _globals['_PRELOADEDUSERSETTINGS_CHANNELSETTINGS']._serialized_start=2856
  _globals['_PRELOADEDUSERSETTINGS_CHANNELSETTINGS']._serialized_end=3185
  _globals['_PRELOADEDUSERSETTINGS_CUSTOMCALLSOUND']._serialized_start=3187
  _globals['_PRELOADEDUSERSETTINGS_CUSTOMCALLSOUND']._serialized_end=3240
  _globals['_PRELOADEDUSERSETTINGS_CHANNELLISTSETTINGS']._serialized_start=3243
  _globals['_PRELOADEDUSERSETTINGS_CHANNELLISTSETTINGS']._serialized_end=3408
  _globals['_PRELOADEDUSERSETTINGS_GUILDSETTINGS']._serialized_start=3411
  _globals['_PRELOADEDUSERSETTINGS_GUILDSETTINGS']._serialized_end=4388
  _globals['_PRELOADEDUSERSETTINGS_GUILDSETTINGS_CHANNELSENTRY']._serialized_start=4144
  _globals['_PRELOADEDUSERSETTINGS_GUILDSETTINGS_CHANNELSENTRY']._serialized_end=4263
  _globals['_PRELOADEDUSERSETTINGS_ALLGUILDSETTINGS']._serialized_start=4391
  _globals['_PRELOADEDUSERSETTINGS_ALLGUILDSETTINGS']._serialized_end=4627
  _globals['_PRELOADEDUSERSETTINGS_ALLGUILDSETTINGS_GUILDSENTRY']._serialized_start=4512
  _globals['_PRELOADEDUSERSETTINGS_ALLGUILDSETTINGS_GUILDSENTRY']._serialized_end=4627
  _globals['_PRELOADEDUSERSETTINGS_RECURRINGDISMISSIBLECONTENTSTATE']._serialized_start=4629
  _globals['_PRELOADEDUSERSETTINGS_RECURRINGDISMISSIBLECONTENTSTATE']._serialized_end=4725
  _globals['_PRELOADEDUSERSETTINGS_USERCONTENTSETTINGS']._serialized_start=4728
  _globals['_PRELOADEDUSERSETTINGS_USERCONTENTSETTINGS']._serialized_end=5641
  _globals['_PRELOADEDUSERSETTINGS_USERCONTENTSETTINGS_RECURRINGDISMISSIBLECONTENTSTATESENTRY']._serialized_start=5306
  _globals['_PRELOADEDUSERSETTINGS_USERCONTENTSETTINGS_RECURRINGDISMISSIBLECONTENTSTATESENTRY']._serialized_end=5467
  _globals['_PRELOADEDUSERSETTINGS_VIDEOFILTERBACKGROUNDBLUR']._serialized_start=5643
  _globals['_PRELOADEDUSERSETTINGS_VIDEOFILTERBACKGROUNDBLUR']._serialized_end=5688
  _globals['_PRELOADEDUSERSETTINGS_VIDEOFILTERASSET']._serialized_start=5690
  _globals['_PRELOADEDUSERSETTINGS_VIDEOFILTERASSET']._serialized_end=5740
  _globals['_PRELOADEDUSERSETTINGS_SOUNDBOARDSETTINGS']._serialized_start=5742
  _globals['_PRELOADEDUSERSETTINGS_SOUNDBOARDSETTINGS']._serialized_end=5778
  _globals['_PRELOADEDUSERSETTINGS_VOICEANDVIDEOSETTINGS']._serialized_start=5781
  _globals['_PRELOADEDUSERSETTINGS_VOICEANDVIDEOSETTINGS']._serialized_end=6702
  _globals['_PRELOADEDUSERSETTINGS_EXPLICITCONTENTSETTINGS']._serialized_start=6705
  _globals['_PRELOADEDUSERSETTINGS_EXPLICITCONTENTSETTINGS']._serialized_end=7082
  _globals['_PRELOADEDUSERSETTINGS_KEYWORDFILTERSETTINGS']._serialized_start=7085
  _globals['_PRELOADEDUSERSETTINGS_KEYWORDFILTERSETTINGS']._serialized_end=7308
  _globals['_PRELOADEDUSERSETTINGS_TEXTANDIMAGESSETTINGS']._serialized_start=7311
  _globals['_PRELOADEDUSERSETTINGS_TEXTANDIMAGESSETTINGS']._serialized_end=9968
  _globals['_PRELOADEDUSERSETTINGS_NOTIFICATIONSETTINGS']._serialized_start=9971
  _globals['_PRELOADEDUSERSETTINGS_NOTIFICATIONSETTINGS']._serialized_end=10567
  _globals['_PRELOADEDUSERSETTINGS_PRIVACYSETTINGS']._serialized_start=10570
  _globals['_PRELOADEDUSERSETTINGS_PRIVACYSETTINGS']._serialized_end=12558
  _globals['_PRELOADEDUSERSETTINGS_DEBUGSETTINGS']._serialized_start=12560
  _globals['_PRELOADEDUSERSETTINGS_DEBUGSETTINGS']._serialized_end=12677
  _globals['_PRELOADEDUSERSETTINGS_GAMELIBRARYSETTINGS']._serialized_start=12680
  _globals['_PRELOADEDUSERSETTINGS_GAMELIBRARYSETTINGS']._serialized_end=12981
  _globals['_PRELOADEDUSERSETTINGS_CUSTOMSTATUS']._serialized_start=12983
  _globals['_PRELOADEDUSERSETTINGS_CUSTOMSTATUS']._serialized_end=13095
  _globals['_PRELOADEDUSERSETTINGS_STATUSSETTINGS']._serialized_start=13098
  _globals['_PRELOADEDUSERSETTINGS_STATUSSETTINGS']._serialized_end=13403
  _globals['_PRELOADEDUSERSETTINGS_LOCALIZATIONSETTINGS']._serialized_start=13406
  _globals['_PRELOADEDUSERSETTINGS_LOCALIZATIONSETTINGS']._serialized_end=13569
  _globals['_PRELOADEDUSERSETTINGS_CLIENTTHEMESETTINGS']._serialized_start=13572
  _globals['_PRELOADEDUSERSETTINGS_CLIENTTHEMESETTINGS']._serialized_end=13701
  _globals['_PRELOADEDUSERSETTINGS_APPEARANCESETTINGS']._serialized_start=13704
  _globals['_PRELOADEDUSERSETTINGS_APPEARANCESETTINGS']._serialized_end=14585
  _globals['_PRELOADEDUSERSETTINGS_GUILDFOLDER']._serialized_start=14588
  _globals['_PRELOADEDUSERSETTINGS_GUILDFOLDER']._serialized_end=14791
  _globals['_PRELOADEDUSERSETTINGS_GUILDFOLDERS']._serialized_start=14793
  _globals['_PRELOADEDUSERSETTINGS_GUILDFOLDERS']._serialized_end=14917
  _globals['_PRELOADEDUSERSETTINGS_FAVORITECHANNEL']._serialized_start=14920
  _globals['_PRELOADEDUSERSETTINGS_FAVORITECHANNEL']._serialized_end=15082
  _globals['_PRELOADEDUSERSETTINGS_FAVORITES']._serialized_start=15085
  _globals['_PRELOADEDUSERSETTINGS_FAVORITES']._serialized_end=15355
  _globals['_PRELOADEDUSERSETTINGS_FAVORITES_FAVORITECHANNELSENTRY']._serialized_start=15228
  _globals['_PRELOADEDUSERSETTINGS_FAVORITES_FAVORITECHANNELSENTRY']._serialized_end=15355
  _globals['_PRELOADEDUSERSETTINGS_AUDIOCONTEXTSETTING']._serialized_start=15357
  _globals['_PRELOADEDUSERSETTINGS_AUDIOCONTEXTSETTING']._serialized_end=15456
  _globals['_PRELOADEDUSERSETTINGS_AUDIOSETTINGS']._serialized_start=15459
  _globals['_PRELOADEDUSERSETTINGS_AUDIOSETTINGS']._serialized_end=15910
  _globals['_PRELOADEDUSERSETTINGS_AUDIOSETTINGS_USERENTRY']._serialized_start=15668
  _globals['_PRELOADEDUSERSETTINGS_AUDIOSETTINGS_USERENTRY']._serialized_end=15787
  _globals['_PRELOADEDUSERSETTINGS_AUDIOSETTINGS_STREAMENTRY']._serialized_start=15789
  _globals['_PRELOADEDUSERSETTINGS_AUDIOSETTINGS_STREAMENTRY']._serialized_end=15910
  _globals['_PRELOADEDUSERSETTINGS_COMMUNITIESSETTINGS']._serialized_start=15912
  _globals['_PRELOADEDUSERSETTINGS_COMMUNITIESSETTINGS']._serialized_end=16023
  _globals['_PRELOADEDUSERSETTINGS_BROADCASTSETTINGS']._serialized_start=16026
  _globals['_PRELOADEDUSERSETTINGS_BROADCASTSETTINGS']._serialized_end=16248
  _globals['_PRELOADEDUSERSETTINGS_CLIPSSETTINGS']._serialized_start=16250
  _globals['_PRELOADEDUSERSETTINGS_CLIPSSETTINGS']._serialized_end=16355
  _globals['_PRELOADEDUSERSETTINGS_FORLATERSETTINGS']._serialized_start=16357
  _globals['_PRELOADEDUSERSETTINGS_FORLATERSETTINGS']._serialized_end=16464
  _globals['_PRELOADEDUSERSETTINGS_SAFETYSETTINGS']._serialized_start=16467
  _globals['_PRELOADEDUSERSETTINGS_SAFETYSETTINGS']._serialized_end=16639
  _globals['_PRELOADEDUSERSETTINGS_ICYMISETTINGS']._serialized_start=16641
  _globals['_PRELOADEDUSERSETTINGS_ICYMISETTINGS']._serialized_end=16683
  _globals['_PRELOADEDUSERSETTINGS_INBOXTAB']._serialized_start=16686
  _globals['_PRELOADEDUSERSETTINGS_INBOXTAB']._serialized_end=16867
  _globals['_PRELOADEDUSERSETTINGS_DMSPAMFILTERV2']._serialized_start=16870
  _globals['_PRELOADEDUSERSETTINGS_DMSPAMFILTERV2']._serialized_end=17037
  _globals['_PRELOADEDUSERSETTINGS_EXPLICITCONTENTREDACTION']._serialized_start=17040
  _globals['_PRELOADEDUSERSETTINGS_EXPLICITCONTENTREDACTION']._serialized_end=17243
  _globals['_PRELOADEDUSERSETTINGS_REACTIONNOTIFICATIONTYPE']._serialized_start=17246
  _globals['_PRELOADEDUSERSETTINGS_REACTIONNOTIFICATIONTYPE']._serialized_end=17422
  _globals['_PRELOADEDUSERSETTINGS_GUILDACTIVITYSTATUSRESTRICTIONDEFAULT']._serialized_start=17425
  _globals['_PRELOADEDUSERSETTINGS_GUILDACTIVITYSTATUSRESTRICTIONDEFAULT']._serialized_end=17582
  _globals['_PRELOADEDUSERSETTINGS_GUILDSLEADERBOARDOPTOUTDEFAULT']._serialized_start=17585
  _globals['_PRELOADEDUSERSETTINGS_GUILDSLEADERBOARDOPTOUTDEFAULT']._serialized_end=17734
  _globals['_PRELOADEDUSERSETTINGS_THEME']._serialized_start=17736
  _globals['_PRELOADEDUSERSETTINGS_THEME']._serialized_end=17831
  _globals['_PRELOADEDUSERSETTINGS_TIMESTAMPHOURCYCLE']._serialized_start=17833
  _globals['_PRELOADEDUSERSETTINGS_TIMESTAMPHOURCYCLE']._serialized_end=17944
  _globals['_PRELOADEDUSERSETTINGS_LAUNCHPADMODE']._serialized_start=17947
  _globals['_PRELOADEDUSERSETTINGS_LAUNCHPADMODE']._serialized_end=18147
  _globals['_PRELOADEDUSERSETTINGS_FAVORITECHANNELTYPE']._serialized_start=18150
  _globals['_PRELOADEDUSERSETTINGS_FAVORITECHANNELTYPE']._serialized_end=18308
  _globals['_PRELOADEDUSERSETTINGS_FORLATERTAB']._serialized_start=18310
  _globals['_PRELOADEDUSERSETTINGS_FORLATERTAB']._serialized_end=18435
  _globals['_PRELOADEDUSERSETTINGS_SAFETYSETTINGSPRESETTYPE']._serialized_start=18438
  _globals['_PRELOADEDUSERSETTINGS_SAFETYSETTINGSPRESETTYPE']._serialized_end=18689
# @@protoc_insertion_point(module_scope)
