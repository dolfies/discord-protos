from enum import Enum as _Enum
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from google.protobuf.message import Message as _Message

    FrecencyUserSettings = PreloadedUserSettings = _Message
else:
    from .FrecencyUserSettings_pb2 import FrecencyUserSettings
    from .PreloadedUserSettings_pb2 import PreloadedUserSettings


class UserSettingsType(_Enum):
    preloaded_user_settings = 1
    frecency_user_settings = 2
    test_settings = 3


UserSettingsImpl = {
    UserSettingsType.preloaded_user_settings: PreloadedUserSettings,
    UserSettingsType.frecency_user_settings: FrecencyUserSettings,
    UserSettingsType.test_settings: None,
}


__version__ = '0.0.2'
